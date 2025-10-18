import styles from "./CategoriesSection.module.css";
import Category from "../../categories/Category";

// Image Imports
import betoneiraImg from "../../../assets/categoriesIcons/betoneiraIcon.png";
import andaimeImg from "../../../assets/categoriesIcons/andaimeIcon.png";
import compactadorIcon from "../../../assets/categoriesIcons/compactadorIcon.png";
import elevacaoIcon from "../../../assets/categoriesIcons/elevacaoIcon.png";


const CategoriesSection = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2>Categorias</h2>
      <div className={styles.categoriesContainer}>
        <Category name="Concretagem" img={betoneiraImg} />
        <Category name="Elevação" img={andaimeImg} />
        <Category name="Compactação" img={compactadorIcon} />
        <Category name="Jardinagem" img={betoneiraImg} />
        <Category name="Limpeza" img={betoneiraImg} />
        <Category name="Furação e demolição" img={betoneiraImg} />
        <Category name="Elétricos" img={betoneiraImg} />
        <Category name="Gerador e bombas" img={betoneiraImg} />
        <Category name="Outros" img={betoneiraImg} />
      </div>
    </section>
  );
};
export default CategoriesSection;
