import React from 'react'
import { apple ,bill,google } from '../assets'
import styles ,{layout} from '../style'


export default function Billing() {
  return (
    <section id='product' className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className='w-[100%] h[100%] relative z-[5]'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easly conrtole your <br className='sm:block hidden'/> billing and invoicing</h2>

        <p className={`${styles.paragraph} mt-5 max-w-470px] text-white`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="apple" className='w-[128px] h-[42px]' />
            <img src={google} alt="apple" className='w-[128px] h-[42px]' />
          </div>
      </div>
    </section>
  )
}
