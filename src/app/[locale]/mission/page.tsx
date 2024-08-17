import styles from "./page.module.scss";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Mission = () => {
  const tMission = useTranslations("MISSION");
  return (
    <div className={styles["mission"]}>
      <Image
        src="/mission.svg"
        alt="Mission"
        width={1644}
        height={577}
        layout="responsive"
        style={{
          maxWidth: "1644px",
          maxHeight: "577px",
        }}
      />
      <div className={styles["mission-title"]}>{tMission("TITLE")}</div>

      <div className={styles["mission-paragraph"]}>
        <span className={styles["mission-paragraph-title"]}>
          {tMission("PARAGRAPH_TITLE")}
        </span>
        <Image
          src="/hr.svg"
          alt="Mission"
          width={155}
          height={1}
          layout="responsive"
          style={{
            maxWidth: "155px",
            maxHeight: "1px",
          }}
        />
        <span className={styles["mission-paragraph-subtitle"]}>
          {tMission("SUBTITLE")}
        </span>
        <span className={styles["mission-paragraph-text"]}>
          {tMission("TEXT")}
        </span>
      </div>
      <div className={styles["mission-paragraph"]}>
        <span className={styles["mission-paragraph-title"]}>
          {tMission("VALUES_TITLE")}
        </span>
        <Image
          src="/hr.svg"
          alt="Mission"
          width={155}
          height={1}
          layout="responsive"
          style={{
            maxWidth: "155px",
            maxHeight: "1px",
          }}
        />
        <div className={styles["mission-paragraph-grid"]}>
          <div className={styles["mission-paragraph-grid-row"]}>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val1.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.0.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.0.TEXT")}
              </div>
            </div>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val2.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.1.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.1.TEXT")}
              </div>
            </div>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val3.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.2.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.2.TEXT")}
              </div>
            </div>
          </div>
          <div className={styles["mission-paragraph-grid-row"]}>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val4.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.3.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.3.TEXT")}
              </div>
            </div>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val5.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.4.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.4.TEXT")}
              </div>
            </div>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val6.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.5.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.5.TEXT")}
              </div>
            </div>
          </div>
          <div className={styles["mission-paragraph-grid-row"]}>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val7.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.6.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.6.TEXT")}
              </div>
            </div>
            <div className={styles["mission-paragraph-grid-row-item"]}>
              <Image
                src="/val8.png"
                alt="Mission"
                width={345}
                height={220}
                layout="responsive"
                style={{ maxWidth: "345px", maxHeight: "220px" }}
              />
              <div className={styles["mission-paragraph-grid-row-item-title"]}>
                {tMission("VALUES.7.TITLE")}
              </div>
              <div className={styles["mission-paragraph-grid-row-item-text"]}>
                {tMission("VALUES.7.TEXT")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
