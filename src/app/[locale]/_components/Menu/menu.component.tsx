"use client";
import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./menu.module.scss";
import Image from "next/image";
import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const Menu = ({ children }: any) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tRoutes = useTranslations("ROUTES");
  const tButtons = useTranslations("BUTTONS");

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
        <div className={styles["menu-top-logo"]}>
          <Image src="/Logo.svg" alt="Logo" width={97} height={109} />
          <Image src="/Logo-text.svg" alt="Logo" width={192} height={78} />
        </div>
        <div className={styles["menu-top-routes"]}>
          <Link href="/"> {tRoutes("MISSION")} </Link>
          <Link href="/about"> {tRoutes("ABOUT_SCHOOL")} </Link>
          <Link href="/library"> {tRoutes("LIBRARY")} </Link>
          <Link href="/grads"> {tRoutes("FOR_GRADS")} </Link>
          <Link href="/contacts"> {tRoutes("CONTACTS")} </Link>
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
    </div>
  );
};

export default Menu;
