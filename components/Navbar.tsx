import styles from '../styles/Navbar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
            <input type="text" placeholder='Search' />
            <SearchIcon/>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
              <LanguageIcon className ={styles.icon}/>
              English
          </div>
          <div className={styles.item}>
              <Brightness4Icon className ={styles.icon}/>
          </div>
          <div className={styles.item}>
              <NotificationsIcon className ={styles.icon}/>
              <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
              <ChatBubbleIcon className ={styles.icon}/>
              <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
              <FeaturedPlayListIcon className ={styles.icon}/>
          </div>
          <div className={styles.item}>
              <FullscreenIcon className ={styles.icon}/>
          </div>
          <div className={styles.item}>
              <img 
                src = '/sidali.jpg'
                className ={styles.avatar}
              />
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar