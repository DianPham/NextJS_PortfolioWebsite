import React from 'react'
import {assets, serviceData} from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'
import Carousel from "@/app/components/Carousel"

const Skills = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    viewport={{ once: true }} 
    id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }} 
            className='text-center mb-2 text-lg font-ovo'
            >
            What can I do
            </motion.h4>
        <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }} 
        className='text-center text-5xl font-ovo'>
            Kỹ năng
        </motion.h2>
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}  
        viewport={{ once: true }}       
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-lg'>
            Mình có kỹ năng nhảy múa, ca hát và làm bánh, 
            luôn tạo không gian vui tươi. Bên cạnh đó, 
            mình thích du lịch để khám phá và học hỏi 
            những điều mới, mang lại trải nghiệm phong 
            phú và sáng tạo trong giảng dạy. 🎶💃🍪✈️
        </motion.p>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}  
        viewport={{ once: true }} >
            <Carousel serviceData = {serviceData}></Carousel>
        </motion.div>
        
    </motion.div>
  )
}

export default Skills
