'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='max-w-[800px] mx-auto mt-24 mb-20 px-6 md:px-2'
    >
      <div className='mb-4'>
        <h2 className='text-2xl font-medium text-center'>Experience</h2>
        <hr className='w-12 h-1 mt-1 bg-blue-500 border-blue-600 mx-auto' />
      </div>{' '}
      <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 text-center md:text-start mb-5'>
        <div className='md:text-lg'>
          <p>July 2022 - January 2023</p>
        </div>
        <div>
          <p className='md:text-lg'>
            PT. Ocommerce Capital Indonesia &nbsp; • &nbsp; Jakarta
          </p>
          <p>Frontend Developer Intern</p>
          <ul className='list-disc list-inside mt-2 font-thin text-justify opacity-80'>
            <li>
              Collaborated cross-functionally with backend developers to define
              and refine API specifications for a content management system app.
            </li>
            <li>
              Validated and tested RESTful APIs using Postman, ensuring data
              accuracy and seamless integration before frontend implementation.
            </li>
            <li>
              Successfully developed a video-based learning web app using
              NextJS.
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 text-center md:text-start'>
        <div className='md:text-lg'>
          <p>May 2023</p>
        </div>
        <div>
          <p className='md:text-lg'>IO Fest 2023 &nbsp; • &nbsp; FTI Untar</p>
          <p>UI/UX Design Competition Participant</p>
          <ul className='list-disc list-inside mt-2 font-thin text-justify opacity-80'>
            <li>
              Analyzed case studies and produced documentation to guide project
              development.
            </li>
            <li>Translated documentation into design plans and UI mockups.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
