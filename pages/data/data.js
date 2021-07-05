import React from 'react'
import styles from '../../styles/Home.module.css'


export const getStaticProps =  async ()=>{  // use for getting data form Api
    const res =  await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: {data: data}
    }
}

function data({data}) {
    return (
        <div>
           <h2 className={styles.title}>list of data</h2>
           {
               data.map((value,index)=><li key ={index} className={styles.text}>Name:  {value.name}</li>)
           }
        </div>
    )
}

export default data
