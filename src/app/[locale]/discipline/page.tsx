import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Discipline = () => {
  const tDiscipline = useTranslations("DISCIPLINE");
  return (
    <div className={styles["discipline"]}>
      <Image
        src="/discipline.svg"
        alt="discipline"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["discipline-title"]}>{tDiscipline("TITLE")}</div>
      <div className={styles["discipline-subtitle"]}>
        {tDiscipline("SUBTITLE")}
      </div>
    </div>
  );
};

export default Discipline;
