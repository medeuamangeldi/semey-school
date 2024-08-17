import styles from "./proforientation.module.scss";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Proforientation = () => {
  const tProforientation = useTranslations("PROFORIENTATION");
  const locale = useLocale();
  return (
    <div className={styles["proforientation"]}>
      <span className={styles["proforientation-title-fixed"]}>
        {tProforientation("TITLE")}
        <span>{tProforientation("TITLE")}</span>
      </span>
      <div className={styles["proforientation-row"]}>
        <div className={styles["proforientation-row-images"]}>
          <div className={styles["proforientation-row-images-column"]}>
            <Image
              src="/prof1.svg"
              alt="Proforientation"
              width={379}
              height={612}
              layout="responsive"
              style={{
                maxHeight: "612px",
                maxWidth: "379px",
              }}
            />
          </div>
          <div className={styles["proforientation-row-images-column"]}>
            <Image
              src="/prof2.svg"
              alt="Proforientation"
              width={261}
              height={288}
              layout="responsive"
              style={{
                maxHeight: "288px",
                maxWidth: "261px",
              }}
            />
            <Image
              src="/prof3.svg"
              alt="Proforientation"
              width={261}
              height={288}
              layout="responsive"
              style={{
                maxHeight: "288px",
                maxWidth: "261px",
              }}
            />
          </div>
        </div>
        <div className={styles["proforientation-row-text"]}>
          {tProforientation("TEXT.0")}
          <br />
          <br />
          {tProforientation("TEXT.1")}
          <br />
          <br />
          {tProforientation("TEXT.2")}
          <br />
          <br />
          {tProforientation("TEXT.3")}
          <br />
          <br />
          {tProforientation("TEXT.4")}
        </div>
      </div>
      <div className={styles["proforientation-content"]}>
        <Image
          src={`/proforientation-${locale}.svg`}
          alt="Proforientation"
          width={1679}
          height={861}
          layout="responsive"
          style={{
            maxHeight: "861px",
            maxWidth: "1679px",
          }}
        />
      </div>
    </div>
  );
};

export default Proforientation;
