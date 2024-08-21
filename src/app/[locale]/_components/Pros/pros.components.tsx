"use client";
import { useTranslations } from "next-intl";
import styles from "./pros.module.scss";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
const Pros = () => {
  const tPros = useTranslations("PROS");
  const parallax: any = useParallax({
    rotate: [270, 360],
  });
  const parallaxTwo: any = useParallax({
    rotate: [270, 360],
  });
  const parallaxThree: any = useParallax({
    rotate: [270, 360],
  });
  const parallaxFour: any = useParallax({
    rotate: [270, 360],
  });
  const handleProsItem = ({
    image,
    mainText,
    mainTextSub,
    paragraph,
    color,
    isLeft,
  }: {
    image: string;
    mainText: string;
    mainTextSub: string;
    paragraph: string;
    color: string;
    isLeft: boolean;
  }) => {
    return isLeft ? (
      <div className={styles["pros-container-content-text-left"]}>
        <div className={styles["pros-container-content-text-left-text"]}>
          <div className={styles["pros-container-content-text-left-text-main"]}>
            <div
              className={
                styles["pros-container-content-text-left-text-main-title"]
              }
            >
              {mainText}
            </div>
            <span
              className={
                styles["pros-container-content-text-left-text-main-sub"]
              }
              style={{
                backgroundColor: color,
              }}
            >
              {mainTextSub}
            </span>
          </div>
          <div>
            <br /> <br />{" "}
          </div>
          <span
            className={
              styles["pros-container-content-text-left-text-paragraph"]
            }
          >
            {paragraph}
          </span>
        </div>
        <div className={styles["pros-container-content-text-left-content"]}>
          <Image
            src={image}
            alt="pros"
            width={856}
            height={548}
            layout="responsive"
            style={{
              maxHeight: "548px",
              maxWidth: "856px",
            }}
          />
        </div>
      </div>
    ) : (
      <div className={styles["pros-container-content-text-right"]}>
        <div className={styles["pros-container-content-text-right-content"]}>
          <Image
            src={image}
            alt="pros"
            width={856}
            height={548}
            layout="responsive"
            style={{
              maxHeight: "548px",
              maxWidth: "856px",
            }}
          />
        </div>
        <div className={styles["pros-container-content-text-right-text"]}>
          <div
            className={styles["pros-container-content-text-right-text-main"]}
          >
            <div
              className={
                styles["pros-container-content-text-right-text-main-title"]
              }
              style={{
                backgroundColor: color,
              }}
            >
              {mainText}
            </div>
            <span
              className={
                styles["pros-container-content-text-right-text-main-sub"]
              }
            >
              {mainTextSub}
            </span>
          </div>
          <div>
            <br /> <br />{" "}
          </div>
          <span
            className={
              styles["pros-container-content-text-right-text-paragraph"]
            }
          >
            {paragraph}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className={styles["pros-container"]}>
      <span className={styles["pros-container-title-fixed"]}>
        {tPros("TITLE")}
        <span>{tPros("TITLE")}</span>
      </span>
      <div className={styles["pros-container-content"]}>
        <div className={styles["left-animated"]}>
          <Image
            src="/pencil.svg"
            alt="pencil"
            width={60}
            height={60}
            ref={parallax.ref}
          />
        </div>
        {handleProsItem({
          image: "/pros1.jpg",
          mainText: tPros("TEXT.0.MAIN"),
          mainTextSub: tPros("TEXT.0.SUB"),
          paragraph: tPros("TEXT.0.PARAGRAPH"),
          isLeft: true,
          color: "#7E1322",
        })}
        <div className={styles["right-animated"]}>
          <Image
            src="/portfolio.svg"
            alt="portfolio"
            width={60}
            height={60}
            ref={parallaxTwo.ref}
          />
        </div>
        {handleProsItem({
          image: "/pros2.jpg",
          mainText: tPros("TEXT.1.MAIN"),
          mainTextSub: tPros("TEXT.1.SUB"),
          paragraph: tPros("TEXT.1.PARAGRAPH"),
          isLeft: false,
          color: "#1A1C49",
        })}
        <div className={styles["left-animated"]}>
          <Image
            src="/clip.svg"
            alt="clip"
            width={60}
            height={60}
            ref={parallaxThree.ref}
          />
        </div>
        {handleProsItem({
          image: "/pros3.jpg",
          mainText: tPros("TEXT.2.MAIN"),
          mainTextSub: tPros("TEXT.2.SUB"),
          paragraph: tPros("TEXT.2.PARAGRAPH"),
          isLeft: true,
          color: "#C9A34B",
        })}
        <div className={styles["right-animated"]}>
          <Image
            src="/compass.svg"
            alt="compass"
            width={60}
            height={60}
            ref={parallaxFour.ref}
          />
        </div>

        {handleProsItem({
          image: "/pros4.jpg",
          mainText: tPros("TEXT.3.MAIN"),
          mainTextSub: tPros("TEXT.3.SUB"),
          paragraph: tPros("TEXT.3.PARAGRAPH"),
          isLeft: false,
          color: "#000000",
        })}
      </div>
    </div>
  );
};

export default Pros;
