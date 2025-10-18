import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Header.module.css";
import DrawerComponent from "../antd/drawer/Drawer";

const Header = () => {
 
  return (
    <header>
      <div className={styles.center}>
        <h1>
          <a href="/" style={{ color: "yellow" }}>
            Up Locações{" "}
          </a>
        </h1>
        <nav className={styles.menuDesktop}>
          <ul>
            <li>
              <Link className={styles.hovverEffect} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.hovverEffect} to="/ferramentas">
                Ferramentas
              </Link>
            </li>
            <li>
              <Link className={styles.hovverEffect} to="/sobre">
                Sobre nós
              </Link>
            </li>
            <li>
              <a
                className={styles.hovverEffect}
                href="https://api.whatsapp.com/send?phone=5551999134363"
                target="_blank"
                rel="noreferrer"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.menuMobile}>
          <DrawerComponent />
        </nav>
      </div>
    </header>
  );
};

export default Header;
