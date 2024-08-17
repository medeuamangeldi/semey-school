import styles from "./how.module.scss";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import ReactPlayer from "react-player";

const How = () => {
  const tHow = useTranslations("HOW");
  const locale = useLocale();
  return (
    <div className={styles["how"]}>
      <span className={styles["how-title-fixed"]}>
        {tHow("TITLE")}
        <span>{tHow("TITLE")}</span>
      </span>
      <div className={styles["how-content"]}>
        <div className={styles["how-content-row"]}>
          <ReactPlayer
            url="https://youtu.be/SevwYIBS0Y8"
            style={{
              maxWidth: "560px",
              maxHeight: "315px",
            }}
            width={560}
            height={315}
            controls
          />
          <ReactPlayer
            url="https://youtu.be/RsOcaf1lvbk"
            style={{
              maxWidth: "560px",
              maxHeight: "315px",
            }}
            width={560}
            height={315}
            controls
          />
        </div>
        <div className={styles["how-content-row"]}>
          <ReactPlayer
            url="https://youtu.be/aXSBmwrsfqs"
            style={{
              maxWidth: "560px",
              maxHeight: "315px",
            }}
            width={560}
            height={315}
            controls
          />
          <ReactPlayer
            url="https://youtu.be/IGaDm16fiNQ"
            style={{
              maxWidth: "560px",
              maxHeight: "315px",
            }}
            width={560}
            height={315}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default How;
