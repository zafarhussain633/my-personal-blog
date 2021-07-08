import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Notfound() {
    return (
        <div className="not-found">
            <h1>ooops</h1>
            <h2 className={styles.title}>this page cannoy b found</h2>
            <p className={styles.text}>go back to home page</p>
            <Link href="/"><a className={styles.btn}>go back to home page</a></Link>
        </div>
    )
}
export default Notfound
