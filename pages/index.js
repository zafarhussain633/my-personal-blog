import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comp/footer'
import Navbar from '../comp/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <> 
    <Head>
      <title>simple next.js app by_zafar</title>
      <meta name="keyword" content="next.js"/>
    </Head>
     
        <div>
          <h2 className={styles.title}>welcome to Next.js</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consequuntur minima fugiat aliquam provident aperiam dicta odit, veritatis accusantium quod quos dolore quidem eos consectetur dolor, pariatur ipsam atque labore velit expedita! Vero nam accusamus inventore voluptatem, natus quo adipisci tempore soluta quasi sapiente rerum fuga! Placeat quaerat ullam perferendis?</p>
        </div>
        <div>
           <Link href="/data/data"><a className={styles.btn} id="apiData">see data from Api</a></Link>
        </div>
    </>
  )
}
