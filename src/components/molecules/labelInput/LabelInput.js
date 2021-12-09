import FormItem from 'antd/lib/form/FormItem';
import Input from '../../atoms/input'
import styles from './labelInput.module.css';

const LabelInput = (props) => {
    const {label,name,children,prefix,type,...rest} = props; 
    return(
        <FormItem label={label} name={name} {...rest}>
            <Input type={type} prefix={prefix}/>
        </FormItem>
    );
}

export default LabelInput;