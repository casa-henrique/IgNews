import styles from "./styles.module.scss";
import { SignInButton } from "./SignInButton";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        {/*No next não é necessário importar a imagem basta apenas declarar o caminho*/}
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        
        <SignInButton />
      </div>
    </header>
  );
}
