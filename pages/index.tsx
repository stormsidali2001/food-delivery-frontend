import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
    <main className={styles.main}>
      
    </main>
    </div>
  )
}

export default Home
