import { FooterRoutes } from "@config/routes";
import styles from "./footer.module.scss";
import packageJson from "../../../package.json";

const menuItems = [
  { text: "Docs", href: FooterRoutes.docs },
  { text: "API", href: FooterRoutes.api },
  { text: "Help", href: FooterRoutes.help },
  { text: "Community", href: FooterRoutes.community },
];

export function Footer() {
  return (
    <footer id="footer-nav" className={styles.container}>
      <div className={styles.version} data-cy="footer-version">
        Version: {packageJson.version}
      </div>
      <div className={styles.linkItems}>
        {menuItems.map((item) => (
          <a
            key={item.text}
            href={item.href}
            className={styles.anchor}
            data-cy={`footer-link-${item.text.toLowerCase()}`}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/logo-small.svg"
          alt="logo"
          className={styles.logo}
          data-cy="footer-logo"
        />
      </div>
    </footer>
  );
}
