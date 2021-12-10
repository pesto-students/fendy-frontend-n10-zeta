import { Title } from '../../atoms/typograhy';
import styles from './productDetails.module.css'
import Card from '../../atoms/card';
import Button, { BUTTON_SIZES }  from '../../atoms/button';
const ProductDetails = (props) =>{
    const {productName,...rest} = props;
    return(
    <div className={styles.container}>
        <Title level={3} text={productName} />
        <Card title="Includes: ">
            <div>
                <p><b>Raymond Blazer Black</b></p>
                <p>Rs. 6999 </p>
            </div>
            <div>
                <p><b>Raymond Trousers Black</b></p>
                <p>Rs. 6999</p>
            </div>
            <div>
                <p><b>Raymond Tie Blue</b></p>
                <p>Rs. 6999</p>
            </div>
            <Button label='Add to Cart' size={BUTTON_SIZES.LARGE} block/>
        </Card>
    </div>
    );
}

export default ProductDetails;