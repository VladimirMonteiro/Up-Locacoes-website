import { useEffect, useRef, useState } from "react";
import styles from "./WhyUsSection.module.css";
import imageTest from "../../../assets/testImage2.png";

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // anima só uma vez
        }
      },
      { threshold: 0.2 } // 20% visível já ativa
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.whyUsSection} ${isVisible ? styles.fadeIn : ""}`}
    >
      <div className={styles.centerWhyUs}>
        <div className={styles.textContainer}>
          <h2>Por que escolher a Up Locações?</h2>
          <p>
            Na <span style={{ color: "#012C6D", fontWeight: "bold" }}>Up Locações</span>, entendemos
            que cada projeto é único e merece o melhor suporte possível. Por isso, oferecemos uma
            ampla gama de equipamentos de alta qualidade, desde betoneiras robustas até andaimes
            versáteis, todos cuidadosamente mantidos para garantir desempenho e segurança. Nossa
            equipe especializada está sempre pronta para ajudar você a escolher as ferramentas
            certas para suas necessidades, além de oferecer suporte técnico e entrega rápida
            diretamente no seu canteiro de obras. Com a Up Locações, você tem a confiança de
            trabalhar com profissionais dedicados ao sucesso do seu projeto.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={imageTest} alt="Com a Up Locações sua obra rende mais!" />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
