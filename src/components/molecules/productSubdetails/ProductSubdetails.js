import { useEffect, useState } from "react";

const ProductSubDetails = (props) => {
    const {status,name,price} = props;
    return(
        <div>
            <p><b>{name}</b></p>
            <p>Rs. {price}</p>
        </div> 
    );
}

export default ProductSubDetails;