import styles from "./Container.module.css";

/*children indica que receberá um parametro que sera alocado dentro das tags (section)*/
function Container({children}){
    return(
        <section className={styles.container}>
            {children}
        </section>/*section pois aloca conteudo dentro*/
    );
}

export default Container;