import type { NextPage } from 'next'
import dynamic from 'next/dynamic' 
const DataTable = dynamic(
  import("../components/DataTable"),
  { ssr: false }
);
import Navbar from '../components/Navbar'
import { SideBar } from '../components/SideBar'
import styles from '../styles/List.module.scss'

const List: NextPage = () => {
  return (
    <div className={styles.container}>
      <SideBar/>
      <main className={styles.main}>
        <Navbar/>
        <DataTable/>
      
      
      </main>
      
    
    </div>
  )
}

export default List
