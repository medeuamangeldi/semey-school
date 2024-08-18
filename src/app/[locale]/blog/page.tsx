import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Blog = () => {
  const tBlog = useTranslations("BLOG");
  return (
    <div className={styles["blog"]}>
      <Image
        src="/blog.svg"
        alt="blog"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["blog-title"]}>{tBlog("TITLE")}</div>
      <div className={styles["blog-subtitle"]}>{tBlog("SUBTITLE")}</div>
    </div>
  );
};

export default Blog;
