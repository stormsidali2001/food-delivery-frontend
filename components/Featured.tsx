import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import styles from '../styles/Featured.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Featured = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>Total Revenue</h1>
          <MoreVert fontSize ="small"/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.chart}>
            <CircularProgressbar value={70} text ={`${70}%`} strokeWidth ={5}/>
          </div>
          <p className={styles.title}>Total sales made today.</p>
          <p className={styles.amount}>$420</p>
          <p className={styles.description}>Previous transaction processing. Last payements may not be included.</p>
          <div className={styles.summary}>
              <div className={styles.item}>
                  <div className={styles.title}>Target</div>
                  <div className={`${styles.result} ${styles.negative}`}>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className={styles.amount}>$12.4k</div>
                  </div>
              </div>
              <div className={styles.item}>
                  <div className={styles.title}>Last Week</div>
                  <div className={`${styles.result} ${styles.negative}`}>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className={styles.amount}>$12.4k</div>
                  </div>
              </div>
              <div className={styles.item}>
                  <div className={styles.title}>Last month</div>
                  <div className={`${styles.result} ${styles.positive}`}>
                    <KeyboardArrowUp fontSize='small'/>
                    <div className={styles.amount}>$12.4k</div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Featured