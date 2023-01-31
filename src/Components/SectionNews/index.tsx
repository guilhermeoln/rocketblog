import styles from './SectionNews.module.scss';
import {  useSelector } from 'react-redux';
import { PropsNews } from 'store/reducers/news';
import CardNews from './CardNews';


interface PropsStateNews {
    news: PropsNews[]
}

export default function SectionNews(){

    const news = useSelector((state: PropsStateNews) => state.news)

    return(
        <div className={styles.containerNews}>
            {news.map((news, index) => (
                <CardNews key={index} {...news}/>
            ))}
        </div>
    );
}