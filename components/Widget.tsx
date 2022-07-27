import { KeyboardArrowUp } from '@mui/icons-material'
import styles from '../styles/Widget.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
interface PropType{
    type: 'user' | 'order' | 'earning' | 'balance'
}
const Widget = ({type}:PropType) => {  
    let data:{
        title?:string,
        unit?:string,
        link?:string,
        icon?:JSX.Element
    } = {};
    switch(type){
        case "user":
        data = {
            title:"USERS",
            unit:"",
            link:"see all users",
            icon:<PersonIcon className={styles.icon}/>
        }
            break;
        case "order":
            data = {
                title:"ORDERS",
                unit:"",
                link:"see all orders",
                icon:<ShoppingCartIcon className={styles.icon}/>
            }
            break;
        case "earning":
                data = {
                    title:"EARNINGS",
                    unit:"$",
                    link:"view net earnings",
                    icon:<MonetizationOnIcon className={styles.icon}/>
                }
            break;
        case "balance":
                data = {
                    title:"BALANCE",
                    unit:"$",
                    link:"see details",
                    icon:<AccountBalanceIcon className={styles.icon}/>
                }
            break;
            
            default:
                break;
    }
    const {
        title,
        unit,
        link,
        icon
    } = data;
    
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <span className={styles.title}>{title}</span>
            <span className={styles.counter}>{`${unit?unit:""}100`}</span>
            <span className={styles.link}>{link}</span>
        </div>
        <div className={styles.right}>
            <div className={`${styles.percentage} ${styles.positive}`}>
                <KeyboardArrowUp className={styles.icon}/>
                20%
            </div>
            {icon}
        </div>
    </div>
  )
}

export default Widget