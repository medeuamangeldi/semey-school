import styles from "./whyus.module.scss";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const Whyus = () => {
  const tWhyus = useTranslations("WHYUS");
  const locale = useLocale();
  return (
    <div className={styles["whyus"]}>
      <span className={styles["whyus-title-fixed"]}>
        {tWhyus("TITLE")}
        <span>{tWhyus("TITLE")}</span>
      </span>
      <div className={styles["whyus-content"]}>
        <Image
          src={`/whyus-bg-${locale}.jpg`}
          alt="Whyus"
          width={1727}
          height={724}
          style={{ maxHeight: "724px", maxWidth: "1727px" }}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Whyus;
