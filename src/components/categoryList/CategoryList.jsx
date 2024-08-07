import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// Placeholder data for categories
const categories = [
  { slug: "style", title: "Style", img: "/style.png" },
  { slug: "fashion", title: "Fashion", img: "/fashion.png" },
  { slug: "food", title: "Food", img: "/food.png" },
  { slug: "travel", title: "Travel", img: "/travel.png" },
  { slug: "culture", title: "Culture", img: "/culture.png" },
  { slug: "coding", title: "Coding", img: "/coding.png" },
];

// CategoryList component
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.slug}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            <span className={styles.title}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
