import styles from "./CategoriesSection.module.css";
import Category from "../../categories/Category";

// Image Imports
import betoneiraImg from "../../../assets/categoriesIcons/betoneiraIcon.png";
import andaimeImg from "../../../assets/categoriesIcons/andaimeIcon.png";
import compactadorIcon from "../../../assets/categoriesIcons/compactadorIcon.png";
import jardinagemIcon from "../../../assets/categoriesIcons/jardinagemIcon.png";
import limpezaIcon from "../../../assets/categoriesIcons/limpezaIcon.png";
import furacaoDemolicaoIcon from "../../../assets/categoriesIcons/furacaoDemolicaoIcon.png";
import eletricosIcon from "../../../assets/categoriesIcons/eletricosIcon.png";
import geradorBombaIcon from "../../../assets/categoriesIcons/geradorBombaIcon.png";
import outrosIcon from "../../../assets/categoriesIcons/outrosIcon.png";

const CategoriesSection = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2>Categorias</h2>
      <div className={styles.categoriesContainer}>
        <Category name="Concretagem" img={betoneiraImg} />
        <Category name="Elevação" img={andaimeImg} />
        <Category name="Compactação" img={compactadorIcon} />
        <Category name="Jardinagem" img={jardinagemIcon} />
        <Category name="Limpeza" img={limpezaIcon} />
        <Category name="Furação e demolição" img={furacaoDemolicaoIcon} />
        <Category name="Elétricos" img={eletricosIcon} />
        <Category name="Gerador e bombas" img={geradorBombaIcon} />
        <Category name="Outros" img={outrosIcon} />
      </div>
    </section>
  );
};
export default CategoriesSection;
