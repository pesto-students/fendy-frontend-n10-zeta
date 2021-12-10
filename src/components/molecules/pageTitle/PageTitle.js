import { Title } from "../../atoms/typograhy";
import styles from './pageTitle.module.css';

const PageTitle = (props) => {
    const {text,level,...rest} = props;
    return(
    <div className={styles.flex}>
        <Title type="underline" level={level || 2} text={text}/>
    </div>
    );
}

export default PageTitle;