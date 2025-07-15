import { Link } from "react-router-dom";
import styles from "./Card.module.css";

/*link e imagem */
function Card({ id }) {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
        ></img>
      </Link>
    </section>
  );
}

export default Card;
