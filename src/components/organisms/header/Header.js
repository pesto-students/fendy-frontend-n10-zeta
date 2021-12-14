import styles from './header.module.css';
import LogoText from "../../molecules/logo/Text/LogoText";
import SearchBar from '../../molecules/searchBar/SearchBar';
import {Title} from '../../atoms/typograhy'
const Header = () =>{
    return(
        <nav className={styles.nav}>
            <LogoText/>
            <SearchBar/>
            <Title level={5} text="Login / Sign up"/>
        </nav>
    );
}

export default Header;