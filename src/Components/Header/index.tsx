import styles from './Header.module.scss';
import logoHeader from '../../assets/img/logoHeader.svg';



export default function Header(){
    return(
        <header className={styles.header}>
            <img src={logoHeader} alt="logoHeader" />
            <nav>
                <h3 className={styles.textSelected}>Home</h3>
                <h3>Sobre</h3>
                <h3>Categorias</h3>
                <h3>Contato</h3>
            </nav>
            <input 
                type="text" 
                placeholder='Buscar'
            />
        </header>
    );
}