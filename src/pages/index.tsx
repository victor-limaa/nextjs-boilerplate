import Head from 'next/head'

import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  )
}
