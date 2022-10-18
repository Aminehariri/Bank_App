import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks ,socialMedia} from '../constants'
export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>

        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} text-white mt-4 max-w-[310px]`}>A new way to make the payment easy.</p>
        </div>

        <div className='flex-[1.5] w-full text-white flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerlink =>(
            <div key={footerlink.key} className='flex flex-col ss:my-0 min-w-[150px]'>
                <h4>{footerlink.title}</h4>
                <ul>
                  {
                    footerlink.links.map((link,index) =>(
                      <li key={link.name} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
                          {link.name }
                      </li>
                    ))
                  }
                </ul>
            </div>
          )))
          
          }

        </div>

      </div>
    </section>
  )
}
