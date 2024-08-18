import React from 'react'
import styles from './Home.page.module.scss'
import { Header } from '@/components/Header/Header'

const Homepage = () => {
  return (
    <div><div className={styles.header}><Header/></div>
    </div>
  )
}

export default Homepage