import styles from './login.module.css'
import leftImage from '../../../assets/wardrobe.png';
import LogoFull from '../../molecules/logo/Full';
import LoginForm from '../../organisms/loginForm';
import SignupForm from '../../organisms/signupForm';
const Login = () =>{
    return(
    <div className={styles.container}>
        <div className={styles.left}>
            <img className={styles.leftImage} src={leftImage} />
        </div>
        <div className={styles.right}>
        <LogoFull text="Sign Up"/>
        <SignupForm/>
        </div>
    </div>
    );
}

export default Login;