import Header from "../../organisms/header";
import CategoryNav from "../../organisms/categoryNav";
import Footer from "../../organisms/footer";
import Banner from "../../molecules/banner";
import { Title } from "../../atoms/typograhy";
import styles from './home.module.css';
import ProductImage from "../../organisms/productImage";
import testImage from '../../../assets/wardrobe.png';
import SimilarStyles from '../../organisms/similarStyles'
const images = [testImage,testImage,testImage,testImage];
const Home = () => {
    return(
        <>
            <Header/>
            <CategoryNav />
            <Banner />
            <div className={styles.container}>
                <Title text="Trending" type='underline' level={2}/>
                <SimilarStyles images={images}/>
                <Title text="Featured" type='underline' level={2}/>
                <SimilarStyles images={images}/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;