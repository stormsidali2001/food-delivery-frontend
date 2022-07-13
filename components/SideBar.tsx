import styles from '../styles/Sidebar.module.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
const links = [
  {
    text:'Dashboard',
    icon: <DashboardIcon className={styles.icon}/>
  },
  {
    text:'Users',
    icon: <GroupIcon className={styles.icon}/>
  },
  {
    text:'Products',
    icon: <Inventory2Icon className={styles.icon}/>
  },
  {
    text:'Statistics',
    icon: <AnalyticsIcon className={styles.icon}/>
  },
  {
    text:'Delivery',
    icon: <DeliveryDiningIcon className={styles.icon}/>
  },
  {
    text:'Notifications',
    icon: <NotificationsIcon className={styles.icon}/>
  },
  {
    text:'System health',
    icon: <MonitorHeartIcon className={styles.icon}/>
  },
  {
    text:'Profil',
    icon: <PersonIcon className={styles.icon}/>
  },
  {
    text:'Logout',
    icon: <MeetingRoomIcon/>
  },

]
const getSection = (index:number)=>{
    switch(index){
      case 0:
        return 'MAIN'
      case 1:
        return 'LISTS'
      case 5:
        return 'USEFUL'
      case 7:
        return 'USER'
      default:
        return null
    }
}
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
                links.map(({text,icon},index)=>{
                  const section = getSection(index);
                  return(
                    <>
                      {
                        section&&(
                          <p className={styles.title}></p>
                        )
                      }
                      <li>
                        {icon}
                        <span>{text}</span>
                      </li>
                    </>
                  )
                })
               }
            </ul>
            
       </div>
       <div className={styles.bottom}></div>

    </div>
  )
}
