import { Carousel } from "antd";
import styles from "./Slider.module.css";

import hero1 from "../../assets/hero1.svg";
import hero2 from "../../assets/hero2.svg";
import hero1Mobile from "../../assets/hero1Mobile.png";

import hero2Mobile from "../../assets/hero2Mobile.png";

const Slider = () => (
  <Carousel
    autoplay
    autoplaySpeed={4000}
    speed={1500}
    infinite
    dots
    className={styles.slider}
  >
    <div className={styles.slide}>
      <img src={hero1} alt="Locação de equipamentos" className={styles.image} />
      <div className={styles.overlay}>
        <h1>Alugue equipamentos, construa com confiança.</h1>
        <p>Soluções completas para sua obra com entrega rápida e segura.</p>
        <button className={styles.ctaButton}>Ver Equipamentos</button>
      </div>
    </div>

    <div className={styles.slide}>
      <img src={hero2} alt="Andaimes e Betoneiras" className={styles.image} />
      <div className={styles.overlay}>
        <h1>Construa mais rápido com a Up Locações.</h1>
        <p>Equipamentos revisados e prontos para o trabalho pesado.</p>
        <button className={styles.ctaButton}>Fale Conosco</button>
      </div>
    </div>

    <div className={styles.slide}>
      <img src={hero1} alt="Compactadores e Ferramentas" className={styles.image} />
      <div className={styles.overlay}>
        <h1>Seu projeto começa com os melhores equipamentos.</h1>
        <p>Locação fácil, entrega garantida e suporte especializado.</p>
        <button className={styles.ctaButton}>Solicitar Orçamento</button>
      </div>
    </div>
  </Carousel>
);

export default Slider;
