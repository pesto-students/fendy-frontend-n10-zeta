import style from './logo.full.module.css';
import Logo from '../../../../logo.svg'
import { Title } from '../../../atoms/typograhy';
import GoogleLogin from '../../googleLogin';
const LogoFull = (props) =>{
    const {text} = props;
    return(
    <div className={style.header}>
        <img src={Logo} className={style.logo} />
        <Title level={2} text="Welcome to Fendy!"/>
        <Title level={2} text={text}/>
        <GoogleLogin text="Sign up using Google"/>
        <Title level={5} text="Or"/>

    </div>
    );
}


export default LogoFull;