import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css"
import logo404 from "./pnf.jpg"

function PageNotFound(){
    return(
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Oops! Conteúdo não localizado</h2>
            <img src={logo404} alt="logo PNF"></img>
        </section>
        <Footer/>
        </>
    );
}

export default PageNotFound;