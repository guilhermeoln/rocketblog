import styles from './CardNews.module.scss';
import { PropsNews } from 'store/reducers/news';



export default function CardNews(props: PropsNews){
    
    const { image, date, title, subTitle } = props;

    return(
        <div className={styles.containerCard}>
            <img src={image} alt="logo" />
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
}