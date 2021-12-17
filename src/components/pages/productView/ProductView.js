import Header from '../../organisms/header'
import Footer from '../../organisms/footer'
import PageTitle from '../../molecules/pageTitle';
import styles from './productView.module.css';
import ProductImage from '../../organisms/productImage';
import testImage from '../../../assets/wardrobe.png';
import ProductDetails from '../../organisms/productDetails';
import SimilarStyles from '../../organisms/similarStyles/SimilarStyles';
import { useSelector } from 'react-redux';
const images = [testImage,testImage,testImage];
const ProductView = () => {
    const currentProduct = useSelector(state => state.currentProduct);
    const status = useSelector(state => state.fetchStatus);
    let {name,description,assets} = currentProduct;
    return(
    <>
    <Header/>
    <div className={styles.container}>
    <section>
        <div className={styles.leftSection}>
            <ProductImage status={status} images={assets} assets={assets} selectedImage={0}/>
        </div>
        <div className={styles.rightSection}>
            <ProductDetails status={status} productName={name}/>
        </div>
    </section>
    <section>
    <PageTitle level={3} text='PRODUCT DESCRIPTION'/>
    <p dangerouslySetInnerHTML={{__html:description}}>
    </p>
    </section>
    <PageTitle level={3} text="SIMIALR STYLES"/>
    <SimilarStyles images={images} />
    </div>
    <Footer/>
    </>
    );
}

export default ProductView;