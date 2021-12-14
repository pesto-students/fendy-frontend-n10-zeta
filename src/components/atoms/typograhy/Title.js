import { Typography } from "antd";
import { getTitleClass } from "./helper/typography.helper";
import styles from './typography.module.css'
export const Title = (props) => {
    const {text,level,type,...rest} = props;
    const newClass = getTitleClass(type)
    return(
        <div className={styles.relavtive}>
            <Typography.Title level={level} className={newClass} {...rest}>
                {text}
            </Typography.Title>
        </div>
    );

}
