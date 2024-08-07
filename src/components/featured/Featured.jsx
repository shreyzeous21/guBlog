import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Hey, Galgotias Dev here!</strong> Explore my latest stories and
        creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="Featured Post Image"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Unveiling the Future: How Technology is Shaping Our World
          </h2>
          <p className={styles.postDesc}>
            Dive into an in-depth exploration of the latest technological
            advancements and their impact on society. From AI innovations to the
            rise of blockchain, discover how these trends are transforming our
            daily lives and what the future holds for tech enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
