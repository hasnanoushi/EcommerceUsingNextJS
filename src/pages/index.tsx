import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../components/Styling.module.css';

export default function Home() {
  return (<Layout onSearch={undefined}>
    <img src={"banner1.jpg"}height={480}width={1480}></img>
   <div className={styles.banner}> <img src={"fashionhaul.jpg"}height={450}width={900}></img>
    <img src={"salel.jpg"}height={450}width={700}></img></div>
    <h1 className={styles.hometext}>SHOP BY CATEGORY!!!</h1>
    <div className={styles.banner}>
      <img className={styles.first} src={'tv.jpg'}></img>
      <img className={styles.categoryimage} src={'alex.jpg'}></img>
      <img className={styles.categoryimage} src={'amaz.jpg'}></img>
      <img className={styles.categoryimage} src={'fash.jpg'}></img>
      <img className={styles.categoryimage} src={'daily.jpg'}></img>
      <img className={styles.categoryimage} src={'elec.jpg'}></img>
      <img className={styles.categoryimage} src={'book.jpg'}></img>
      
    </div>
  </Layout>
    
  )
}

