import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Grads = () => {
  const tGrads = useTranslations("GRADS");
  return (
    <div className={styles["grads"]}>
      <Image
        src="/grads.svg"
        alt="grads"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["grads-title"]}>{tGrads("TITLE")}</div>
      <div className={styles["documents-subtitle"]}>
        <a
          style={{
            color: "blue",
            textDecoration: "underline",
            fontWeight: "bold",
            wordBreak: "break-all",
          }}
          href="/ent.docx"
        >
          {tGrads("ENT")}
        </a>
      </div>
    </div>
  );
};

export default Grads;
