import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppIcon.module.css";

const whatsappIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5551999134363"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconContainer}
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
};

export default whatsappIcon;
