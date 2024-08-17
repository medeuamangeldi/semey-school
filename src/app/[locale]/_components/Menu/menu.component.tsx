"use client";
import { useLocale } from "next-intl";
import styles from "./menu.module.scss";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import SimpleMap from "../Map/map.component";

const Menu = ({ children }: any) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tRoutes = useTranslations("ROUTES");
  const tButtons = useTranslations("BUTTONS");
  const tFooter = useTranslations("FOOTER");

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
          >
            {" "}
            {tRoutes("ABOUT_SCHOOL")}{" "}
            <Image src="/arr-down.svg" alt="Search" width={10} height={10} />
          </div>
          <Link href="/library"> {tRoutes("LIBRARY")} </Link>
          <Link href="/grads"> {tRoutes("FOR_GRADS")} </Link>
          <Link href="#contacts"> {tRoutes("CONTACTS")} </Link>
        </div>
        <Image src="/vert-line.svg" alt="Search" width={1} height={65} />
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
          />
          <Image
            style={{
              cursor: "pointer",
            }}
            src="/insta.svg"
            alt="Flag RU"
            width={30}
            height={30}
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
          <div className={styles["menu-top-button-text"]}>
            {tButtons("BOOK_A_TOUR")}
          </div>
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
              <div className={styles["footer-contacts-content-buttons-button"]}>
                {tButtons("BOOK_A_TOUR")}
              </div>
              <div className={styles["footer-contacts-content-buttons-button"]}>
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
