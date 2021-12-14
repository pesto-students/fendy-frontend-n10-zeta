import { Title } from '../../atoms/typograhy';
import styles from './productDetails.module.css'
import Card from '../../atoms/card';
import Button, { BUTTON_SIZES }  from '../../atoms/button';
import { useEffect, useState } from 'react';
import ProductSubDetails from '../../molecules/productSubdetails';
const ProductDetails = (props) =>{
    const {productName,status,...rest} = props;
    const [name,setName] = useState(['Title']);
    const [subDetails,setSubdetails] = useState([])
    useEffect(()=>{
        if(status==='success'){
            setName(productName.split(','))
            const array = productName.split(',');
            const newarray = [];
            for (let i = 1; i < array.length; i+=2) {
                newarray.push(<ProductSubDetails key={i} name={array[i]} price={array[i+1]}/>)
            }
            setSubdetails(newarray);
        }
    },[status])
    return(
    <div className={styles.container}>
        <Title level={3} text={name[0]} />
        <Card title="Includes: ">
            {subDetails.map((subdetail,idx) => subdetail)}
            <Button label='Add to Cart' size={BUTTON_SIZES.LARGE} block/>
        </Card>
    </div>
    );
}

export default ProductDetails;