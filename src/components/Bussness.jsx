import React from 'react'
import { features } from '../constants'
import styles,{layout} from '../style'
import Button from './Button'


const FeatureCard =({icon,title,content,index}) =>(
  <div className='flex flex-row p-6 rounded-[20px] feature-Card'>
    <div className={`w-[64px] rounded-full `}>
      <img src={icon} alt="icon" className='w-[50%]  object-contain'/>
    </div>

    <div className='flex flex-1 flex-col ml-3'>
      <h4 className='font-poppins text-[18px] font-semibold  text-white leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins text-[16px] font-normal text-white leading-[25px] mb-1'>{content}</p>
    </div>
  </div>
)


export default function Bussness() {
  return (
    <section  id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>you do the business ,we'll <br className='sm:block hidden'/> handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-[5] text-gray-300`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles='mt-10 '/>
      </div>

      <div className={`${layout.sectionImg} flex-col feature-Card`}>
        {
          features.map((feature,index)=>(
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section>
  )
}
