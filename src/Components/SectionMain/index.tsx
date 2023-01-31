import styles from './SectionMain.module.scss';
import imgPost from '../../assets/img/post-1.png';



export default function SectionMain() {
    return (
        <div className={styles.containerMain}>
            <div className={styles.colMain}>
                <img src={imgPost} alt="imgPost" />
                <p>Janeiro 04, 2022</p>
                <h3>Começando no ReactJS em 2022</h3>
                <p className={styles.textDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
                    Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque.
                    Sed volutpat aenean sit vitae, sed tristique.
                    Sed volutpat aenean.
                </p>
            </div>
            <div className={styles.colMainTwo}>
                <div className={styles.postColTwo}>
                    <p>Janeiro 04, 2022</p>
                    <h3>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h3>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Nibh nibh eu in aliquet ut adipiscing neque.
                        Sed volutpat aenean sit vitae, sed tristique.
                    </p>
                </div>
            </div>
        </div >
    );
}