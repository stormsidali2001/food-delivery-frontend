import type { NextPage } from 'next'
import dynamic from 'next/dynamic' 
import AdminNavbar from '../../components/AdminNavbar';
const DataTable = dynamic(
  import("../../components/DataTable"),
  { ssr: false }
);
import { SideBar } from '../../components/SideBar';
import styles from '../styles/List.module.scss';

const List: NextPage = () => {
  return (
    <div className={styles.container}>
      <SideBar/>
      <main className={styles.main}>
        <AdminNavbar/>
        <DataTable/>
      
      
      </main>
      
    
    </div>
  )
}

export default List
