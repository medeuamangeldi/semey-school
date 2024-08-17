"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";
import Pros from "./_components/Pros/pros.components";
import { ParallaxProvider } from "react-scroll-parallax";
import Whyus from "./_components/Whyus/whyus.component";
import Proforientation from "./_components/Proforientation/proforientation.component";
import Photogallery from "./_components/Photogallery/photogallery.component";
import How from "./_components/How/how.component";
export default function Home() {
  const locale = useLocale();
  const handleBoardByLocale = () => {
    switch (locale) {
      case "kz":
        return (
          <div className={styles["main-board-kz"]}>
            <Image
              src={"/board-kz.jpg"}
              alt="Main board"
              width={1695}
              height={858.3}
              layout="responsive"
            />
          </div>
        );
      case "ru":
        return (
          <div className={styles["main-board-ru"]}>
            <Image
              src={"/board-ru.jpg"}
              alt="Main board"
              width={1695}
              height={858.3}
              layout="responsive"
            />
          </div>
        );
      default:
        return <div className={styles["main-board-kz"]}></div>;
    }
  };
  return (
    <main className={styles["main"]}>
      {handleBoardByLocale()}
      <ParallaxProvider>
        <Pros />
      </ParallaxProvider>
      <Whyus />
      <Proforientation />
      <Photogallery />
      <How />
    </main>
  );
}
