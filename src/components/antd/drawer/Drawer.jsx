import { useState } from "react";
import { Drawer, Space } from "antd";
import { Link } from "react-router-dom";
import menu from "../../../assets/menu.png";
import styles from "./DrawerComponent.module.css";

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Space>
        <img
          src={menu}
          alt="menu"
          onClick={showDrawer}
          className={styles.menuIcon}
        />
      </Space>

      <Drawer placement="left" width={300} onClose={onClose} open={open}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/" onClick={onClose} className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/ferramentas" onClick={onClose} className={styles.link}>
                Produtos
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={onClose} className={styles.link}>
                Sobre nós
              </Link>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5551999134363"
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className={`${styles.link} ${styles.whatsapp}`}
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
