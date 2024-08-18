import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Psychology = () => {
  const tPsychology = useTranslations("PSYCHOLOGY");
  return (
    <div className={styles["psychology"]}>
      <Image
        src="/psychology.svg"
        alt="psychology"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["psychology-title"]}>{tPsychology("TITLE")}</div>
      <div className={styles["psychology-subtitle"]}>
        {tPsychology("SUBTITLE")}
      </div>
    </div>
  );
};

export default Psychology;
