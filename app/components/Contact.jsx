import React from 'react'
import {assets, serviceData} from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'

const Contact = ({isDarkMode}) => {

    // ADD SEND FORM FUNCTION

    return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }} 
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center 
    bg-[length:90%_auto] dark:bg-none'>
        <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }} 
        className='text-center mb-2 text-lg font-ovo'
        >
        Connect with me
        </motion.h4>
        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }} 
        className='text-center text-5xl font-ovo'
        >
        Giữ liên lạc nhé
        </motion.h2>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true }} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
        >
        Mình rất mong nhận được phản hồi từ bạn! Nếu bạn 
        có bất kỳ câu hỏi, ý kiến hoặc góp ý nào, vui lòng sử dụng biểu mẫu dưới đây.
        </motion.p>


        <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        viewport={{ once: true }} 
        className='max-w-2xl mx-auto'
        >
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8 font-outfit'>
        <motion.input
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        viewport={{ once: true }} 
        type="text" placeholder="Enter your name" required
        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
        dark:bg-darkHover dark:bg-opacity-30 dark:border-white"
        name="name"
        />

        <motion.input
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        viewport={{ once: true }} 
        type="email" placeholder="Enter your email" required
        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
        dark:bg-darkHover dark:bg-opacity-30 dark:border-white"
        name="email"
        />

        </div>
        <motion.textarea 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }} 
        rows='6' placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
            dark:bg-darkHover dark:bg-opacity-30
            dark:border-white font-outfit'>
        </motion.textarea>
        <motion.button 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.1 }}        
        type='submit' 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 
            bg-black bg-opacity-80 text-white rounded-full 
            mx-auto hover:bg-black duration-500 dark:bg-transparent 
            dark:border-[0.5px] dark:hover:bg-darkHover font-outfit'>
            Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        {/* <p className='mt-4'>{result}</p> */}

        </motion.form>

    </motion.div>
    )
      
}

export default Contact