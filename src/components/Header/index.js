import styles from "./Header.module.css";

function Header() {
    return(
        <header className={styles.header}>
            <span>AmandaFlix</span>
            <nav>
                <a href="link">Home</a>
                <a href="link">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;