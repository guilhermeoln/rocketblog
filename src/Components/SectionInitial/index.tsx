import styles from './SectionInitial.module.scss';
import logoArrowRight from '../../assets/img/arrow-right.svg';
import imageSectionInitial from '../../assets/img/featured-image.png';

export default function SectionInitial() {
    return (
        <div className={styles.containerSectionInitial}>
            <div className={styles.textSectionInitial}>
                <h2>
                    Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
                </h2>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Nibh nibh eu in aliquet ut adipiscing neque.
                    Sed volutpat aenean sit vitae,
                    sed tristique placerat hac.
                </p>
                <h3>
                    Veja mais 
                    <img src={logoArrowRight} alt="logoArrowRight"/>
                </h3>
            </div>
            <div className={styles.imgSectionInitial}>
                <img src={imageSectionInitial} alt="imageInitial" />
            </div>
        </div>
    );
}