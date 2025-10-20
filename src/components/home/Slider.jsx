import { useEffect, useState } from "react";
import { Carousel } from "antd";
import styles from "./Slider.module.css";

import hero1Desktop from "../../assets/hero1.webp";
import hero2Desktop from "../../assets/hero2.webp";
import hero1Mobile from "../../assets/hero1-mobile.webp";
import hero2Mobile from "../../assets/hero2-mobile.webp";

const Slider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      autoplay
      autoplaySpeed={4000}
      speed={1500}
      infinite
      dots ={false}
      className={styles.slider}
    >
      <div className={styles.slide}>
        <img
          src={isMobile ? hero1Mobile : hero1Desktop}
          alt="Locação de equipamentos"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <h1>Alugue equipamentos, construa com confiança.</h1>
          <p>Soluções completas para sua obra com entrega rápida e segura.</p>
          <button className={styles.ctaButton}>Ver Equipamentos</button>
        </div>
      </div>

      <div className={styles.slide}>
        <img
          src={isMobile ? hero2Mobile : hero2Desktop}
          alt="Andaimes e Betoneiras"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <h1>Construa mais rápido com a Up Locações.</h1>
          <p>Equipamentos revisados e prontos para o trabalho pesado.</p>
          <button className={styles.ctaButton}>Fale Conosco</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
