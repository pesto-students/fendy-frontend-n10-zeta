import styles from './header.module.css';
import LogoText from "../../molecules/logo/Text/LogoText";
import SearchBar from '../../molecules/searchBar/SearchBar';
import {Title} from '../../atoms/typograhy'
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <nav className={styles.nav}>
            <LogoText/>
            <SearchBar/>
            <Link to='/login'><Title level={5} text="Login / Sign up"/></Link>
        </nav>
    );
}

export default Header;