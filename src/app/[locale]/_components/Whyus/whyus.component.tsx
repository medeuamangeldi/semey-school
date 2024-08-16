import styles from "./whyus.module.scss";

import { useLocale, useTranslations } from "next-intl";

const Whyus = () => {
  const tWhyus = useTranslations("WHYUS");
  const locale = useLocale();
  return (
    <div className={styles["whyus"]}>
      <span className={styles["whyus-title-fixed"]}>
        {tWhyus("TITLE")}
        <span>{tWhyus("TITLE")}</span>
      </span>
      <div
        className={styles["whyus-content"]}
        style={{
          backgroundImage: `url(/whyus-bg-${locale}.jpg)`,
        }}
      ></div>
    </div>
  );
};

export default Whyus;
