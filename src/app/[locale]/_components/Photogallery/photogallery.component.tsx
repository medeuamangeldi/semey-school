import styles from "./photogallery.module.scss";

import { useLocale, useTranslations } from "next-intl";

const Photogallery = () => {
  const tPhotogallery = useTranslations("PHOTOGALLERY");
  const locale = useLocale();
  return (
    <div className={styles["photogallery"]}>
      <span className={styles["photogallery-title-fixed"]}>
        {tPhotogallery("TITLE")}
        <span>{tPhotogallery("TITLE")}</span>
      </span>
      <div className={styles["photogallery-content"]}></div>
    </div>
  );
};

export default Photogallery;
