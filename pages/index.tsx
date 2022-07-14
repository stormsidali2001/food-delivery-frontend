import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { SideBar } from '../components/SideBar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SideBar/>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.widgets}>

        </div>
      </main>
      
    
    </div>
  )
}

export default Home
