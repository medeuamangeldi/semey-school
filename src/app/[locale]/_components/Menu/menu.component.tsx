"use client";
import { useLocale } from "next-intl";
import styles from "./menu.module.scss";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import SimpleMap from "../Map/map.component";
import { useState } from "react";

const Menu = ({ children }: any) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tRoutes = useTranslations("ROUTES");
  const tButtons = useTranslations("BUTTONS");
  const tFooter = useTranslations("FOOTER");

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleLocaleChange = (localeCode: any) => {
    router.replace(
      `${pathname}${searchParams ? "?" + searchParams.toString() : ""}`,
      {
        locale: localeCode,
      }
    );
  };
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu-top"]}>
        <div
          className={styles["menu-top-logo"]}
          onClick={() => {
            router.push("/");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={97}
            height={109}
            layout="responsive"
            style={{
              maxWidth: "97px",
              maxHeight: "109px",
              zIndex: 999,
            }}
          />
          <Image
            src="/Logo-text.svg"
            alt="Logo"
            width={192}
            height={78}
            layout="responsive"
            style={{
              maxWidth: "192px",
              maxHeight: "78px",
              zIndex: 999,
            }}
          />
        </div>
        <div className={styles["menu-top-routes"]}>
          <Link
            href="/mission"
            style={{
              color: pathname === "/mission" ? "#7F1222" : "black",
            }}
          >
            {" "}
            {tRoutes("MISSION")}{" "}
          </Link>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={handleExpand}
          >
            {" "}
            {tRoutes("ABOUT_SCHOOL")}{" "}
            <Image src="/arr-down.svg" alt="Search" width={10} height={10} />
            {expanded && (
              <div className={styles["menu-top-routes-dropdown"]}>
                <Link href="/board"> {tRoutes("BOARD")} </Link>
                <Link href="/sport"> {tRoutes("SPORT")} </Link>
                <Link href="/food"> {tRoutes("FOOD")} </Link>
                <Link href="/psychology"> {tRoutes("PSYCHOLOGY")} </Link>
                <Link href="/discipline"> {tRoutes("DISCIPLINE")} </Link>
                <Link href="/documents"> {tRoutes("DOCUMENTS")} </Link>
                <Link href="/blog"> {tRoutes("BLOG")} </Link>
              </div>
            )}
          </div>
          <Link
            href="/library"
            style={{
              color: pathname === "/library" ? "#7F1222" : "black",
            }}
          >
            {" "}
            {tRoutes("LIBRARY")}{" "}
          </Link>
          <Link
            href="/grads"
            style={{
              color: pathname === "/grads" ? "#7F1222" : "black",
            }}
          >
            {" "}
            {tRoutes("FOR_GRADS")}{" "}
          </Link>
          <Link
            href="#contacts"
            style={{
              color: pathname === "/contacts" ? "#7F1222" : "black",
            }}
          >
            {" "}
            {tRoutes("CONTACTS")}{" "}
          </Link>
        </div>
        <Image
          className={styles["menu-top-vertical-line"]}
          src="/vert-line.svg"
          alt="Search"
          width={1}
          height={65}
        />
        <div className={styles["menu-top-locales"]}>
          <span
            onClick={() => handleLocaleChange("kz")}
            style={{
              color: locale === "kz" ? "black" : "#727272",
              cursor: "pointer",
            }}
          >
            ҚАЗ
          </span>
          <span
            onClick={() => handleLocaleChange("ru")}
            style={{
              color: locale === "ru" ? "black" : "#727272",
              cursor: "pointer",
            }}
          >
            РУ
          </span>

          {/* <span>EN</span> */}
        </div>
        <div className={styles["menu-top-icons"]}>
          <Image
            style={{
              cursor: "pointer",
            }}
            src="/telegram.svg"
            alt="Flag RU"
            width={30}
            height={30}
            onClick={() => {
              window.open("https://t.me/+77476553149", "_blank");
            }}
          />
          <Image
            style={{
              cursor: "pointer",
            }}
            src="/insta.svg"
            alt="Flag RU"
            width={30}
            height={30}
            onClick={() => {
              window.open(
                "https://www.instagram.com/sns_semey?igsh=YmF6b3dlcGZsOHli",
                "_blank"
              );
            }}
          />
          <Image
            style={{
              cursor: "pointer",
            }}
            src="/whatsapp.svg"
            alt="Flag RU"
            width={30}
            height={30}
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=77476553149&text&type=phone_number&app_absent=0",
                "_blank"
              );
            }}
          />
        </div>
        <div className={styles["menu-top-button"]}>
          {" "}
          <div
            className={styles["menu-top-button-text"]}
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=77476553149&text&type=phone_number&app_absent=0",
                "_blank"
              );
            }}
          >
            {tButtons("BOOK_A_TOUR")}
          </div>
        </div>
        <div className={styles["menu-top-burger"]}>
          <Image
            className={styles["menu-top-burger"]}
            src={`/burger-${isBurgerOpen ? "open" : "closed"}.svg`}
            alt="Search"
            width={40}
            height={40}
            onClick={() => {
              setIsBurgerOpen(!isBurgerOpen);
            }}
          />
          {isBurgerOpen && (
            <div className={styles["menu-top-burger-menu"]}>
              <div className={styles["menu-top-burger-menu-routes"]}>
                <Link
                  href="/mission"
                  style={{
                    color: pathname === "/mission" ? "#7F1222" : "black",
                  }}
                  className={styles["menu-top-burger-menu-routes-item"]}
                  onClick={() => {
                    setIsBurgerOpen(!isBurgerOpen);
                  }}
                >
                  {" "}
                  {tRoutes("MISSION")}{" "}
                </Link>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  className={styles["menu-top-burger-menu-routes-item"]}
                  onClick={handleExpand}
                >
                  {" "}
                  {tRoutes("ABOUT_SCHOOL")}{" "}
                  <Image
                    src="/arr-down.svg"
                    alt="Search"
                    width={10}
                    height={10}
                  />
                  {expanded && (
                    <div className={styles["menu-top-routes-dropdown"]}>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/board"
                      >
                        {" "}
                        {tRoutes("BOARD")}{" "}
                      </Link>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/sport"
                      >
                        {" "}
                        {tRoutes("SPORT")}{" "}
                      </Link>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/food"
                      >
                        {" "}
                        {tRoutes("FOOD")}{" "}
                      </Link>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/psychology"
                      >
                        {" "}
                        {tRoutes("PSYCHOLOGY")}{" "}
                      </Link>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/discipline"
                      >
                        {" "}
                        {tRoutes("DISCIPLINE")}{" "}
                      </Link>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/documents"
                      >
                        {" "}
                        {tRoutes("DOCUMENTS")}{" "}
                      </Link>
                      <Link
                        onClick={() => {
                          setIsBurgerOpen(!isBurgerOpen);
                        }}
                        href="/blog"
                      >
                        {" "}
                        {tRoutes("BLOG")}{" "}
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/library"
                  style={{
                    color: pathname === "/library" ? "#7F1222" : "black",
                  }}
                  className={styles["menu-top-burger-menu-routes-item"]}
                  onClick={() => {
                    setIsBurgerOpen(!isBurgerOpen);
                  }}
                >
                  {" "}
                  {tRoutes("LIBRARY")}{" "}
                </Link>
                <Link
                  href="/grads"
                  style={{
                    color: pathname === "/grads" ? "#7F1222" : "black",
                  }}
                  className={styles["menu-top-burger-menu-routes-item"]}
                  onClick={() => {
                    setIsBurgerOpen(!isBurgerOpen);
                  }}
                >
                  {" "}
                  {tRoutes("FOR_GRADS")}{" "}
                </Link>
                <Link
                  href="#contacts"
                  style={{
                    color: pathname === "/contacts" ? "#7F1222" : "black",
                  }}
                  className={styles["menu-top-burger-menu-routes-item"]}
                  onClick={() => {
                    setIsBurgerOpen(!isBurgerOpen);
                  }}
                >
                  {" "}
                  {tRoutes("CONTACTS")}{" "}
                </Link>
              </div>
              <div className={styles["menu-top-locales-menu"]}>
                <span
                  onClick={() => handleLocaleChange("kz")}
                  style={{
                    color: locale === "kz" ? "black" : "#727272",
                    cursor: "pointer",
                  }}
                >
                  ҚАЗ
                </span>
                <span
                  onClick={() => handleLocaleChange("ru")}
                  style={{
                    color: locale === "ru" ? "black" : "#727272",
                    cursor: "pointer",
                  }}
                >
                  РУ
                </span>

                {/* <span>EN</span> */}
              </div>
              <div className={styles["menu-top-icons-menu"]}>
                <Image
                  style={{
                    cursor: "pointer",
                  }}
                  src="/telegram.svg"
                  alt="Flag RU"
                  width={30}
                  height={30}
                  onClick={() => {
                    window.open("https://t.me/+77476553149", "_blank");
                  }}
                />
                <Image
                  style={{
                    cursor: "pointer",
                  }}
                  src="/insta.svg"
                  alt="Flag RU"
                  width={30}
                  height={30}
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/sns_semey?igsh=YmF6b3dlcGZsOHli",
                      "_blank"
                    );
                  }}
                />
                <Image
                  style={{
                    cursor: "pointer",
                  }}
                  src="/whatsapp.svg"
                  alt="Flag RU"
                  width={30}
                  height={30}
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send/?phone=77476553149&text&type=phone_number&app_absent=0",
                      "_blank"
                    );
                  }}
                />
              </div>
              <div className={styles["menu-top-button-menu"]}>
                {" "}
                <div
                  className={styles["menu-top-button-text"]}
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send/?phone=77476553149&text&type=phone_number&app_absent=0",
                      "_blank"
                    );
                  }}
                >
                  {tButtons("BOOK_A_TOUR")}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {children}
      <div className={styles["footer"]}>
        <div className={styles["footer-map"]}>
          <SimpleMap />
        </div>
        <div className={styles["footer-contacts"]}>
          <div className={styles["footer-contacts-title"]} id="contacts">
            {tFooter("TITLE")}
          </div>
          <div className={styles["footer-contacts-content"]}>
            <div>
              {tFooter("ADDRESS")}
              <br />
              <br />
              {tFooter("HOURS")}
              <br />
              <br />
              {tFooter("PHONE")}
            </div>
            <div className={styles["footer-contacts-content-buttons"]}>
              <div
                className={styles["footer-contacts-content-buttons-button"]}
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send/?phone=77476553149&text&type=phone_number&app_absent=0",
                    "_blank"
                  );
                }}
              >
                {tButtons("BOOK_A_TOUR")}
              </div>
              <div
                className={styles["footer-contacts-content-buttons-button"]}
                onClick={() => {
                  window.open(
                    "https://2gis.kz/semey/firm/70000001063812740",
                    "_blank"
                  );
                }}
              >
                {tFooter("2GIS")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
