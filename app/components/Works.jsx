import React from 'react'
import Link from 'next/link';
import {assets, workData} from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'

const Works = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }} 
    id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }} 
        viewport={{ once: true }} 
        className='text-center text-5xl font-ovo'>
            Công việc của mình
        </motion.h2>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true }} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Những trường mầm non mình đã có cơ hội được đứng lớp 
        giảng dạy, mang đến cho mình nhiều trải nghiệm quý giá. 
        Mình được hướng dẫn các bé những bài học đầu đời, rèn luyện 
        sự kiên nhẫn, sáng tạo và đồng hành cùng sự phát triển của trẻ.
        </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 dark:text-black px-4 max-w-6xl mx-auto"
            >
            {workData.map((project) => (
                <Link key={project.id || project.link} href={project.link} passHref>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-300"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                    role="link"
                    aria-label={`View ${project.title || 'project'}`}
                >
                    <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                    <div>
                        <h2 className="font-semibold font-outfit text-xs">{project.title}</h2>
                        <p className="text-sm text-gray-700 font-outfit text-xs">{project.description}</p>
                    </div>
                    <div className="border rounded-full border-black w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                        <Image
                        src={assets.send_icon}
                        alt="Visit project"
                        className="w-5"
                        width={20}
                        height={20}
                        />
                    </div>
                    </div>
                </motion.div>
                </Link>
            ))}
            </motion.div>
        
        <motion.a 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}   
        viewport={{ once: true }}      
        href="/hinh-anh/tong-quan" className='w-max flex items-center justify-center gap-2 
            text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto 
            my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white
            dark:hover:bg-darkHover font-outfit'>
            Xem thêm <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </motion.a>


    </motion.div>
  )
}

export default Works
