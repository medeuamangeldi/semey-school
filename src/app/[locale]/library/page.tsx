import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Library = () => {
  const tLibrary = useTranslations("LIBRARY");
  return (
    <div className={styles["library"]}>
      <Image
        src="/library.svg"
        alt="library"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["library-title"]}>{tLibrary("TITLE")}</div>
      <div className={styles["library-search"]}>
        <input
          type="text"
          placeholder={tLibrary("SEARCH")}
          className={styles["library-search-input"]}
        />
        <div className={styles["library-search-button"]}>
          {tLibrary("FIND")}
        </div>
      </div>
      <div className={styles["library-grid"]}>
        <div className={styles["library-grid-row"]}>
          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/math.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("MATH")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/russian.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("RUSSIAN")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("ONE_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/kazakh.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("KAZAKH")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("ONE_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/geography.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("GEOGRAPHY")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>
        </div>

        <div className={styles["library-grid-row"]}>
          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/biology.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("BIOLOGY")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/chemistry.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("CHEMISTRY")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/physics.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("PHYSICS")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/informatics.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("INFORMATICS")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>
        </div>

        <div className={styles["library-grid-row"]}>
          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/english.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("ENGLISH")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("TWO_TO_11")}
            </div>
          </div>

          <div className={styles["library-grid-row-item"]}>
            <div className={styles["library-grid-row-item-image"]}>
              <Image
                src="/history.svg"
                alt="library"
                width={294}
                height={182}
                layout="responsive"
                style={{ maxWidth: "294px", maxHeight: "182px" }}
              />
            </div>
            <div className={styles["library-grid-row-item-title"]}>
              {tLibrary("HISTORY")}
            </div>
            <div className={styles["library-grid-row-item-description"]}>
              {tLibrary("SIX_TO_11")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
