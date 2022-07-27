import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import styles from '../styles/Navbar.module.scss'
const Navbar = ()=>{
    return (
        <nav className={styles.container}>
            <img src='' alt='1'/>
            <div className={styles.search}>
                <SearchRounded className = {styles.icon}/>
                <input type='text' placeholder='search...'/>
            </div>
            <div className={styles.shoppingCart}>
                <ShoppingCartRounded className={styles.icon} />
                <div className={styles.counter}>2</div>
            </div>
            <div className={styles.profilContainer}>
                <div className={styles.imageBox}>
                    <img src ='' alt='2'/>
                </div>
                <h2 className={styles.userName}>Sidali Assoul</h2>
            </div>
            <div className={styles.toggleIcon}>
                <BarChart className={styles.icon} />
            </div>
        </nav>
    )
}

export default Navbar;