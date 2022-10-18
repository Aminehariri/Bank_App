import React from 'react'
import styles from '../style'
import Button from './Button'



export default function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div>
        <h2 className={styles.heading2}>Let's try out service</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#FFFFFF] `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button />
      </div>
    </section>
  )
}
