'use client';

import { motion } from 'framer-motion';

export default function () {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='max-w-[800px] mx-auto mt-24 px-6 md:px-2'
    >
      <div className='mb-4'>
        <h2 className='text-xl md:text-2xl font-medium text-center'>About</h2>
        <hr className='w-12 h-1 mt-1 bg-blue-500 border-blue-600 mx-auto' />
      </div>
      <div className='text-gray-300 text-justify text-base md:text-lg font-thin opacity-80'>
        <p className='indent-8'>
          I'm a graduate in Information Systems from{' '}
          <span className='font-medium'>Tarumanagara University</span> with a
          passion for web development—especially in frontend engineering and
          UI/UX design. With hands-on experience in HTML, CSS, JavaScript, and
          the <span className='font-medium'>React JS</span> , I enjoy turning
          ideas into visually appealing and responsive web interfaces.
        </p>
        <br />
        <br />
        <p className='indent-8'>
          I thrive both in collaborative environments and working independently,
          always eager to learn new tools and trends to stay up-to-date in the
          ever-evolving tech world. I'm currently open to new opportunities
          where I can grow as a developer and contribute to impactful projects.
        </p>
      </div>
    </motion.div>
  );
}
