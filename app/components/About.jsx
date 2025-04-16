import { assets, infoList} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const About = ({isDarkMode}) => {
    return (
      <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 1}}
        viewport={{ once: true }}  >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }} 
          className='text-center mb-2 text-lg font-ovo'>
          Giới thiệu
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }} 
          className='text-center text-6xl font-ovo'>
          Về mình
        </motion.h2>
  
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className='w-64 sm:w-80 rounded-3xl max-w-none'
          >
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}  
              viewport={{ once: true }}                
              className='flex-1 overflow-visible'>
              <p className='mb-10 max-w-2xl font-ovo text-lg'>
              Hiện mình đang sống tại Thành phố Hồ Chí Minh, 
              là cử nhân ngành Sư phạm Mầm Non tại trường Đại học Sư Phạm TP.HCM.
              Mình có sở thích trồng cây, hội họa và làm đồ handmade.
              Châm ngôn sống của mình là <span className="font-bold">"Cách duy nhất để làm được những điều không thể là tin rằng đó là điều có thể"</span>🎨🍪
              </p>

              <motion.ul initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}  
                  viewport={{ once: true }} 
                  className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                  {infoList.map(({ icon, iconDark, title, description }, index) => (
                      <motion.li whileHover={{ scale: 1.05 }}className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                      hover:bg-lightHover hover:-translate-y-1 duration-500 
                      hover:shadow-black dark:border-white dark:hover:shadow-white 
                      dark:hover:bg-darkHover dark:hover:bg-opacity-80'
                      key={index}
                      >
                      <Image src={isDarkMode? iconDark :icon} alt={title} className='w-7 mt-3' />
                      <h3 className='my-4 font-semibold text-gray-700 font-outfit dark:text-white'>{title}</h3>
                      <p className='text-gray-600 text-sm dark:text-white/80 font-outfit dark:opacity-80'>{description}</p>
                      </motion.li>
                  ))}
              </motion.ul>
            </motion.div>

        </motion.div>

      </motion.div>
    )
  }
  
  export default About;
  