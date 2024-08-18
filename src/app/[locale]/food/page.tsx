import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Food = () => {
  const tFood = useTranslations("FOOD");
  return (
    <div className={styles["food"]}>
      <Image
        src="/food.svg"
        alt="food"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["food-title"]}>{tFood("TITLE")}</div>
      <div className={styles["food-subtitle"]}>{tFood("SUBTITLE")}</div>
    </div>
  );
};

export default Food;
