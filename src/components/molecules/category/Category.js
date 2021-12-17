import styles from './category.module.css';

const Category = (props) => {
    const {category,imgSrc,...rest} = props;
    return(
        <div className={styles.container}>
            <img className={styles.imgContainer} src={imgSrc} />
            <div className={styles.textStyle}>
                {category}
            </div>
        </div>
    );
}
export default Category;