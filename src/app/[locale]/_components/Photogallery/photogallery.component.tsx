"use client";
import styles from "./photogallery.module.scss";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
const Photogallery = () => {
  const tPhotogallery = useTranslations("PHOTOGALLERY");
  const locale = useLocale();
  const [photoId, setPhotoId] = useState(1);
  const handleRightClick = () => {
    if (photoId < 20) {
      setPhotoId(photoId + 1);
    } else {
      setPhotoId(1);
    }
  };
  const handleLeftClick = () => {
    if (photoId > 1) {
      setPhotoId(photoId - 1);
    } else {
      setPhotoId(20);
    }
  };
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
          width={50}
          height={50}
          style={{
            maxHeight: "100px",
            maxWidth: "100px",
            cursor: "pointer",
          }}
          layout="responsive"
          onClick={handleLeftClick}
        />
        <Image
          src={`/photo${photoId}.svg`}
          alt="Photogallery"
          width={1408}
          height={904}
          style={{
            maxHeight: "904px",
            maxWidth: "1408px",
          }}
          layout="responsive"
        />
        <Image
          src="/arrow-right.svg"
          alt="Photogallery"
          width={50}
          height={50}
          style={{
            maxHeight: "100px",
            maxWidth: "100px",
            cursor: "pointer",
          }}
          layout="responsive"
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
};

export default Photogallery;
