import { useTranslations } from "next-intl";
import styles from "./page.module.scss";

import Image from "next/image";

const Board = () => {
  const tBoard = useTranslations("BOARD");
  return (
    <div className={styles["board"]}>
      <Image
        src="/board-main.svg"
        alt="Board"
        width={1638}
        height={578}
        layout="responsive"
        style={{
          maxWidth: "1638px",
          maxHeight: "578px",
        }}
      />
      <div className={styles["board-title"]}>{tBoard("TITLE")}</div>
      <div className={styles["board-subtitle"]}>{tBoard("SUBTITLE")}</div>
      <div className={styles["board-subtitle"]}>
        <ul>
          <li>{tBoard("ITEMS.0")}</li>
          <li>{tBoard("ITEMS.1")}</li>
          <li>{tBoard("ITEMS.2")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Board;
