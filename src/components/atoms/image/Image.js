import { getImageClassName } from "./helper/image.helper";
import {Image as ImageAntD} from 'antd';
import IMAGE_TYPES from "./constants/image.types";

const Image = (props) => {
    const {className, type,src,...rest} = props;
    const newClass = getImageClassName(className,type);
    return(
        <ImageAntD preview={IMAGE_TYPES.PRODUCT_VIEW === type} src={src} className={newClass} />
    );
}

export default Image;