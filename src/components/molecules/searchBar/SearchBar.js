import styles from './searchBar.module.css';
import Input from '../../atoms/input';
import {SearchOutlined} from '../../atoms/icon'
const SearchBar = () => {
    return(
        <section>
            <Input className={styles.searchInput} type='text' name='text' size='large' placeholder='Search your style' prefix={<SearchOutlined/>} />
        </section>
    );
}

export default SearchBar;