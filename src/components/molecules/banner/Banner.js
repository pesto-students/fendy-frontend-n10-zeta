import Carousel from "../../atoms/carousel";
import banner1 from '../../../assets/banner1.png';
import banner2 from '../../../assets/banner2.png';

import styles from './banner.module.css';

const banners = [banner1,banner2];
const Banner =() => 
    <div className={styles.container}>
        <Carousel className={styles.carousel} effect="fade" autoplay autoplaySpeed={100000}>
        {
                        banners?.length > 0 && banners.map((url, urlIndex) =>
                            <img src={url} key={urlIndex} alt="banner" className={styles.image} />
                    )
                }
        </Carousel>
    </div>

export default Banner;