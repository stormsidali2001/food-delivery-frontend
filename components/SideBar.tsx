import styles from '../styles/Sidebar.module.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
export const SideBar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.top}>
            <span className={styles.logo}>jibli Foodi</span>
       </div>
       <hr/>
       <div className={styles.center}>
            <ul>
                <li>
                  <DashboardIcon/>
                  <span>Dashboard</span>
                </li>
            </ul>
            
       </div>
       <div className={styles.bottom}></div>

    </div>
  )
}
