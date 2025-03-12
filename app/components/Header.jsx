import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = ({ isDarkMode }) => {

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen 
    flex flex-col items-center justify-center gap-4'>

      {/* Avatar Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }} 
      >
        <Image 
          src={assets.profile_img} 
          alt='' 
          className='rounded-full w-32'    
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }} 
        viewport={{ once: true }} 
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
      >
        Xin chào, mình là Lê Kim Oanh 
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      {/* Short Description */}
      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} 
        viewport={{ once: true }} 
        className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'
      >
        một cô giáo mầm non với đam mê làm bánh.
      </motion.h1>

      {/* Full Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }} 
        viewport={{ once: true }} 
        className='max-w-2xl mx-auto font-ovo'
      >
        Mình là giáo viên mầm non 21 tuổi, yêu trẻ con và thích chơi đùa. Luôn dịu dàng, tận tâm, mình mong muốn mang đến tuổi thơ vui vẻ và ý nghĩa cho các bé. 💕👶🎨
      </motion.p>

      {/* Contact & Resume Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

        {/* Contact Button */}
        <motion.a 
          href="https://www.facebook.com/le.kim.oanh811"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }} 
          viewport={{ once: true }} 
          className='px-10 py-3 border border-white rounded-full bg-black 
          text-white flex items-center gap-2 dark:bg-transparent font-Outfit'
        >
          Contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>

        <motion.a
          href="/sample-resume.pdf"
          download="sample-resume.pdf"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          resume
          <Image src={assets.download_icon} alt="download icon" className="w-4" />
        </motion.a>

      </div>
      
    </div>
  );
};

export default Header;
