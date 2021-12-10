import IMAGE_TYPES from "../../atoms/image/constants/image.types";
import Image from "../../atoms/image/Image";
import styles from './productImage.module.css';
import cx from 'classnames';

const ProductImage = (props) => {
    const {images,selectedImage} = props;
    const selectedImageClassname = cx(styles.thubhnailImageContainer , styles.selectedImage)
    return(
        <div className={styles.productImageContainer}>
                    <div className={styles.selectedImageContainer}>
                        <Image src={images[selectedImage]} type={IMAGE_TYPES.PRODUCT_VIEW}/>
                    </div>
                    {
                        images.map((image,imageIndex)=>{
                            return(
                            
                                <div className={imageIndex===selectedImage ? selectedImageClassname :styles.thubhnailImageContainer }>
                                    <Image src={image} type={IMAGE_TYPES.PRODUCT_THUMBNAIL}/>
                                </div>
                            );
                        })
                    }
        </div>
    );
}

export default ProductImage;