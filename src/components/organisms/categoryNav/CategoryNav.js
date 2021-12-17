import styles from './categoryNav.module.css';
import Category from '../../molecules/category';
import mens from '../../../assets/mens.png'
import womens from '../../../assets/womens.png'
import kids from '../../../assets/kids.png'
import office from '../../../assets/office.png'
import street from '../../../assets/street.png'
import travel from '../../../assets/travel.png'
const CategoryNav = () => {
    return(
        <div className={styles.container}>
            <Category imgSrc={mens}  category="Mens" />
            <Category imgSrc={womens}  category="Womens" />
            <Category imgSrc={kids}  category="Kids" />
            <Category imgSrc={office}  category="Office" />
            <Category imgSrc={street}  category="Street" />
            <Category imgSrc={travel}  category="Travel" />
        </div>
    );
}

export default CategoryNav;