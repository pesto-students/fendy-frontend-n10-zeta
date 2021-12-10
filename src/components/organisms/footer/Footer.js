import { FacebookFilled, InstagramFilled, TwitterOutlined } from '../../atoms/icon';
import { useEffect, useRef, useState } from 'react';
import styles from './footer.module.css';
const Footer = () => {
    const footerRef = useRef();
    const [footerHeight, setFooterHeight] = useState(100);
    useEffect(() => {
        if (footerRef.current?.clientHeight) {
            setFooterHeight(footerRef.current.clientHeight)
        }
    }, [footerRef.current?.clientHeight]);
    return(
        <div  className={styles.footer}>
                <div>
                    <h2> Online Shopping </h2>
                    <div> Men </div>
                    <div> Women </div>
                    <div> Kids </div>
                </div>
                <div>
                    <h2>Useful Links</h2>
                    <div> FAQS </div>
                    <div> Privacy Policy </div>
                    <div> Terms & Conditions </div>
                </div>
                <div>
                    <h2> Follow us : <FacebookFilled/> <TwitterOutlined/> <InstagramFilled/> </h2>
                </div>
            </div>
    );
}

export default Footer;