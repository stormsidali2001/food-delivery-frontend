import { Table } from '@mui/material';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic' 
import Featured from '../../components/Featured';
const Chart = dynamic(
  import("../../components/Chart"),
  { ssr: false }
);
import {SideBar} from '../../components/SideBar'
import Widget from '../../components/Widget';

import styles from '../../styles/Dashboard.module.scss'
import AdminNavbar from '../../components/AdminNavbar';

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <SideBar/>
      <main className={styles.main}>
        <AdminNavbar/>
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

export default Dashboard

