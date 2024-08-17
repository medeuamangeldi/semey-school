import styles from "./photogallery.module.scss";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const Photogallery = () => {
  const tPhotogallery = useTranslations("PHOTOGALLERY");
  const locale = useLocale();
  return (
    <div className={styles["photogallery"]}>
      <span className={styles["photogallery-title-fixed"]}>
        {tPhotogallery("TITLE")}
        <span>{tPhotogallery("TITLE")}</span>
      </span>
      <div className={styles["photogallery-content"]}>
        <Image
          src="/arrow-left.svg"
          alt="Photogallery"
          width={100}
          height={100}
          style={{
            maxHeight: "100px",
            maxWidth: "100px",
            cursor: "pointer",
          }}
          layout="responsive"
        />
        <Image
          src="/photo1.svg"
          alt="Photogallery"
          width={1240}
          height={794}
          style={{
            maxHeight: "794px",
            maxWidth: "1240px",
          }}
          layout="responsive"
        />
        <Image
          src="/arrow-right.svg"
          alt="Photogallery"
          width={100}
          height={100}
          style={{
            maxHeight: "100px",
            maxWidth: "100px",
            cursor: "pointer",
          }}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Photogallery;
