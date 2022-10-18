import React from 'react'
import { card } from '../assets'
import styles ,{layout} from '../style'
import Button from './Button'





export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy stops.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white `}> Arcu tortor purus in mattis at sed integer  Aliquet quis aliquet eget mauris torAliquet ultrices ac ametau </p>
        <Button  styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )
}
