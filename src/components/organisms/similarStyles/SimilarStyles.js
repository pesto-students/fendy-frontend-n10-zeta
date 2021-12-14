import Image from '../../atoms/image';
import IMAGE_TYPES from '../../atoms/image/constants/image.types';
import styles from './similarStyles.module.css';

const SimilarStyles = (props) => {
    const {images,...rest} = props; 
    return(
    <div className={styles.container} >
        {
            images.map((image,idx)=>{
                return(
                    <Image key={idx} src={image} type={IMAGE_TYPES.PRODUCT_THUMBNAIL_FULL}/>
                );
            })
        }
    </div>
    );
}

export default SimilarStyles;