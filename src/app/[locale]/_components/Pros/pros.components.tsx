"use client";
import { useTranslations } from "next-intl";
import styles from "./pros.module.scss";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
const Pros = () => {
  const tPros = useTranslations("PROS");
  const parallax: any = useParallax({
    rotate: [180, 360],
  });
  const parallaxTwo: any = useParallax({
    rotate: [180, 360],
  });
  const parallaxThree: any = useParallax({
    rotate: [180, 360],
  });
  const parallaxFour: any = useParallax({
    rotate: [180, 360],
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
          <span
            className={styles["pros-container-content-text-left-text-main"]}
          >
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
          </span>
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
        <div
          className={styles["pros-container-content-text-left-content"]}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
    ) : (
      <div className={styles["pros-container-content-text-right"]}>
        <div
          className={styles["pros-container-content-text-right-content"]}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className={styles["pros-container-content-text-right-text"]}>
          <span
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
          </span>
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
            width={120}
            height={120}
            ref={parallax.ref}
          />
        </div>
        {handleProsItem({
          image: "/pros1.jpg",
          mainText: "ПОВЫСЬТЕ СВОЙ АКАДЕМИЧЕСКИЙ",
          mainTextSub: "ПОТЕНЦИАЛ",
          paragraph:
            "Талантливые учителя, высокие академические стандарты и развитие лидерских навыков в смешанной среде - это отличительные черты образования в Semey New School",
          isLeft: true,
          color: "#7E1322",
        })}
        <div className={styles["right-animated"]}>
          <Image
            src="/portfolio.svg"
            alt="portfolio"
            width={120}
            height={120}
            ref={parallaxTwo.ref}
          />
        </div>
        {handleProsItem({
          image: "/pros2.jpg",
          mainText: "ВЕДУЩИЙ",
          mainTextSub: "ПРЕПОДАВАТЕЛЬСКИЙ СОСТАВ",
          paragraph:
            "Преподаватели SNS разнообразны и являются лидерами в своей области - и приверженцами миссии школы сделать позитивное различие в мире",
          isLeft: false,
          color: "#1A1C49",
        })}
        <div className={styles["left-animated"]}>
          <Image
            src="/clip.svg"
            alt="clip"
            width={120}
            height={120}
            ref={parallaxThree.ref}
          />
        </div>
        {handleProsItem({
          image: "/pros3.jpg",
          mainText: "ЛУЧШЕЕ",
          mainTextSub: "ОБОРУДОВАНИЕ",
          paragraph:
            "На протяжении многих лет SNS инвестировала в круглосуточное обучение и проживание, включая обширное новое академическое здание и реконструкцию общежитий, библиотеки, столовой и спортивных сооружений",
          isLeft: true,
          color: "#C9A34B",
        })}
        <div className={styles["right-animated"]}>
          <Image
            src="/compass.svg"
            alt="compass"
            width={120}
            height={120}
            ref={parallaxFour.ref}
          />
        </div>

        {handleProsItem({
          image: "/pros4.jpg",
          mainText: "ЛУЧШИЕ",
          mainTextSub: "ВОЗМОЖНОСТИ",
          paragraph:
            "SNS является лидером в предоставлении возможностей, позволяющих обнаружить новые интересы или глубже погрузиться в давно сохраненные страсти. Преподаватели, тренеры, воспитатели общежития, деканы и консультанты тесно сотрудничают со студентами, направляя их опытами.",
          isLeft: false,
          color: "#000000",
        })}
      </div>
    </div>
  );
};

export default Pros;
