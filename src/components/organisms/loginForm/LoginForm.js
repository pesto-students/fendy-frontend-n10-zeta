import Form from '../../atoms/form'
import LabelInput from '../../molecules/labelInput';
import {MailOutlined, LockOutlined} from '../../atoms/icon'
import Button, { BUTTON_SIZES } from '../../atoms/button'
import style from './loginForm.module.css';

const LoginForm = (props) => {
    const formLayout = {
        labelCol:{
            span:4
        },
        wrapperCol:{
            span:4
        }
    }
    return(
        <Form size='large' className={style.container} layout="vertical">
            <LabelInput label="Email" name="email" prefix={<MailOutlined/>}/>
            <LabelInput label="Password" name="password" prefix={<LockOutlined/>}/>
            <Button size={BUTTON_SIZES.LARGE} block label="Login"/>
        </Form>
    );
}

export default LoginForm;