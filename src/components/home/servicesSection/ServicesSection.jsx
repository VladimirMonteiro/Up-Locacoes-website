import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.servicesSection} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
    >
      <h2>Conheça nossos serviços</h2>
      <div className={styles.center}>
        <div className={styles.card}>
          <h2>Equipamentos para Construção</h2>
          <p>
            Locação de betoneiras, andaimes, rompedores e{" "}
            <span>
              <Link to="/ferramentas">muito mais!</Link>
            </span>
          </p>
        </div>

        <div className={styles.card}>
          <h2>Manutenção de betoneiras</h2>
          <p>Manutenção e conserto de betoneiras.</p>
        </div>

        <div className={styles.card}>
          <h2>Suporte ao Cliente</h2>
          <p>Atendimento especializado para ajudar na sua escolha.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
