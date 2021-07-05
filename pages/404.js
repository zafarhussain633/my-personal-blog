import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Notfound() {
    const router = useRouter();

    useEffect(() => {
       setTimeout(()=>{
           router.push("/") // redirect to home page after 2 sec
       },2000)
    }, []);


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
