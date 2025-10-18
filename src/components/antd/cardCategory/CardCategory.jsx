import { Card } from "antd";
import styles from "./CardCategory.module.css";
const { Meta } = Card;
const CardCategory = ({ title, img }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <div className={styles.imgWrapper}>
        <img draggable={false} alt={title} src={img} className={styles.imgCategory} />
      </div>
    }
  >
    <Meta title={title} style={{ textAlign: "center", fontSize: "16px" }} />
  </Card>
  
);
export default CardCategory;
