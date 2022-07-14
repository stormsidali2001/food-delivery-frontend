import { KeyboardArrowUp } from '@mui/icons-material'
import styles from '../styles/Widget.module.scss'
const Widget = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <span className={styles.title}>USERS</span>
            <span className={styles.counter}>12554</span>
            <span className={styles.link}>see all user</span>
        </div>
        <div className={styles.right}>
            <div className="percentage">
                <KeyboardArrowUp/>
                20%
            </div>
        </div>
    </div>
  )
}

export default Widget