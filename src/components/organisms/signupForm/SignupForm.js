import Form from '../../atoms/form'
import LabelInput from '../../molecules/labelInput';
import {MailOutlined, LockOutlined} from '../../atoms/icon'
import Button, { BUTTON_SIZES } from '../../atoms/button'
import style from './signupForm.module.css';
import { Input } from 'antd';

const SignupForm = (props) => {
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
            <LabelInput type={Input.Password} label="Password" name="password" prefix={<LockOutlined/>}/>
            <LabelInput type={Input.Password} label="Confirm Password" name="confirm-password" prefix={<LockOutlined/>}/>
            <Button size={BUTTON_SIZES.LARGE} block label="Create Account"/>
            <div>Todo: Already have an account login</div>
        </Form>
    );
}

export default SignupForm;