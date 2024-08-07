import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email address" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("your-database-name"); // Replace with your database name
    const collection = db.collection("subscribers");

    const result = await collection.insertOne({
      email,
      subscribedAt: new Date(),
    });

    if (result.insertedCount === 1) {
      return new NextResponse(
        JSON.stringify({ message: "Subscription successful!" }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Subscription failed. Please try again." }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing subscription:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Subscription failed. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
