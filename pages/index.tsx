import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { SideBar } from '../components/SideBar'
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
      </main>
      
    
    </div>
  )
}

export default Home
