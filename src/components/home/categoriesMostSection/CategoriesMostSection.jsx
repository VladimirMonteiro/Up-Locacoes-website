import { useEffect, useRef, useState } from "react";
import styles from "./CategoriesMostSection.module.css";

// Images
import betoneiraCategoryImg from "../../../assets/categories/betoneiraCategory.png";
import andaimeCategoryImg from "../../../assets/categories/andaimeCategory.png";
import rompedorCategoryImg from "../../../assets/categories/rompedorCategory.png";
import compactadorCategoryImg from "../../../assets/categories/compactadorCategory.png";

// Components
import CardCategory from "../../antd/cardCategory/CardCategory";

const CategoriesMostSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.categoriesMostSection} ${
        isVisible ? styles.fadeInUp : styles.fadeOutDown
      }`}
    >
      <h2>Equipamentos mais populares</h2>
      <div className={styles.popularCardsContainer}>
        <CardCategory title="Betoneiras" img={betoneiraCategoryImg} />
        <CardCategory title="Andaimes" img={andaimeCategoryImg} />
        <CardCategory title="Rompedores" img={rompedorCategoryImg} />
        <CardCategory title="Compactadores" img={compactadorCategoryImg} />
      </div>
    </section>
  );
};

export default CategoriesMostSection;
