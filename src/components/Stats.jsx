import React from 'react'
import { stats } from '../constants'
import styles from '../style'


export default function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap ms:mb-20 mb-6`}>
      {
        stats.map((stat) =>(
          <div key={stat.id} className={`flex-1 flex justify-start items-center m-3 flex-row`}>
            <h4 className='font-poppins font-semibold xl:text-[40px] text-[30px] xl:leading-[53px] leading-[43px] text-white'>{stat.title}</h4>
            <p className='font-poppins font-normal xl:text-[20px] text-[15px] xl:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.value}</p>
          </div>
        ))
      }
    </section>
  )
}
