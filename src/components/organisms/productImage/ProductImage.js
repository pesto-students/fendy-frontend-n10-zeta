import IMAGE_TYPES from "../../atoms/image/constants/image.types";
import Image from "../../atoms/image/Image";
import styles from './productImage.module.css';
import cx from 'classnames';
import Spin from "../../atoms/spin";

const ProductImage = (props) => {
    const {images,selectedImage,status,assets} = props;
    const selectedImageClassname = cx(styles.thubhnailImageContainer , styles.selectedImage)
    console.log(assets,status);
        return(
            (status==='success' && images) ?
            <div className={styles.productImageContainer}>
                        <div className={styles.selectedImageContainer}>
                            <Image src={images[selectedImage].url} type={IMAGE_TYPES.PRODUCT_VIEW}/>
                        </div>
                        {
                            images.map((image,imageIndex)=>{
                                return(
                                
                                    <div className={imageIndex===selectedImage ? selectedImageClassname :styles.thubhnailImageContainer }>
                                        <Image src={image.url} type={IMAGE_TYPES.PRODUCT_THUMBNAIL}/>
                                    </div>
                                );
                            })
                        }
            </div>:
            <Spin tip='Loading...' />
            
        );
}

export default ProductImage;