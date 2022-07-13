import styles from '../styles/Sidebar.module.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
const links = [
  {
    text:'Dashboard',
    icon: <DashboardIcon/>
  },
  {
    text:'Users',
    icon: <DashboardIcon/>
  },

]
export const SideBar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.top}>
            <span className={styles.logo}>jibli Foodi</span>
       </div>
       <hr/>
       <div className={styles.center}>
            <ul>
               {
                links.map(({text,icon})=>{
                  return(
                    <li>
                      {icon}
                      <span>{text}</span>
                    </li>
                  )
                })
               }
            </ul>
            
       </div>
       <div className={styles.bottom}></div>

    </div>
  )
}
