import styles from "./Card.module.css";

/*link e imagem */
function Card({id}){
    return(
        <section className={styles.card}>
            <a
                href={`https://youtu.be/${id}`}
                rel="noopener noreferrer"
                target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                alt="Capa"></img>
            </a>
        </section>
    );
}

export default Card;