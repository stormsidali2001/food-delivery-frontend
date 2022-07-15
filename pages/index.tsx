import type { NextPage } from 'next'
import dynamic from 'next/dynamic' 
const Chart = dynamic(
  import("../components/Chart"),
  { ssr: false }
);
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import { SideBar } from '../components/SideBar'
import Table from '../components/Table';
import Widget from '../components/Widget'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SideBar/>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.widgets}>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className={styles.charts}>
            <Featured/>
            <Chart/>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Latest Transactions</div>
          <Table/>
        </div>
      </main>
      
    
    </div>
  )
}

export default Home
