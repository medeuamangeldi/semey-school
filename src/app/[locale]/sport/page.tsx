import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Sport = () => {
  const tSport = useTranslations("SPORT");
  return (
    <div className={styles["sport"]}>
      <Image
        src="/sport.svg"
        alt="sport"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["sport-title"]}>{tSport("TITLE")}</div>
      <div className={styles["sport-subtitle"]}>{tSport("SUBTITLE")}</div>
    </div>
  );
};

export default Sport;
