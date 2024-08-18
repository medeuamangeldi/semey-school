import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Documents = () => {
  const tDocuments = useTranslations("DOCUMENTS");
  return (
    <div className={styles["documents"]}>
      <Image
        src="/documents.svg"
        alt="documents"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["documents-title"]}>{tDocuments("TITLE")}</div>
      <div className={styles["documents-subtitle"]}>
        {tDocuments("SUBTITLE")}
      </div>
    </div>
  );
};

export default Documents;
