import { Typography } from "antd";
import styles from './typography.module.css'
export const Title = (props) => {
    const {text,level,...rest} = props;

    return(
        <Typography.Title level={level} className={styles.title} {...rest}>
            {text}
        </Typography.Title>
    );

}
