import Header from 'Components/Header';
import SectionInitial from 'Components/SectionInitial';
import SectionMain from 'Components/SectionMain';
import SectionNews from 'Components/SectionNews';
import styles from './Home.module.scss';



export default function Home(){
    return(
        <div className={styles.containerHome}>
            <Header />
            <SectionInitial />
            <SectionMain />
            <SectionNews />
        </div>
    );
}