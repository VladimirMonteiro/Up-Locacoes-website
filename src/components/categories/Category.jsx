import styles from "./Category.module.css";

const Category = ({ name, img }) => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryCircle}>
        <img src={img} alt={name} />
      </div>
      <h3 className={styles.categoryLabel}>{name}</h3>
    </div>
  );
};
export default Category;
