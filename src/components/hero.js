'use client';

import { motion } from 'framer-motion';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import voxel from '@/asset/voxel.png';

export default function Hero() {
  const pdfUrl = '/CV-Abdurrahman.pdf';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='max-w-[800px] mx-auto mt-14 px-6 md:px-2'
    >
      <div className='text-center'>
        <div className='flex justify-center mb-12'>
          <Image src={voxel} height={350} alt='voxel' className='ml-5' />
        </div>
        <p className='text-blue-500 font-bold text-3xl md:text-5xl tracking-tight mb-2'>
          Abdurrahman Al-Harits
        </p>
        <p className='text-gray-300 text-lg md:text-2xl mb-4 font-medium'>
          Frontend Developer | UI/UX Designer
        </p>
        <div className='flex flex-row items-center justify-center gap-6 my-12 md:mb-0'>
          <Link href={pdfUrl} target='_blank' rel='noopener noreferrer'>
            <button className='z-10 cursor-pointer text-sm md:text-base font-medium text-gray-200 md:w-auto pt-2 pb-3 px-3 mt-1 border border-blue-500 rounded-xl hover:bg-white hover:bg-opacity-70 hover:text-blue-500 transition duration-300'>
              My Resume →
            </button>
          </Link>

          <div className='flex gap-6 flex-row text-4xl text-blue-500 z-20'>
            <Link href='https://github.com/haritsabdurr' target='blank'>
              <AiOutlineGithub className='hover:cursor-pointer hover:text-white hover:opacity-70 transition duration-300' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/abdurrahmanalharits/'
              target='blank'
            >
              <AiOutlineLinkedin className='hover:cursor-pointer hover:text-white hover:opacity-70 transition duration-300' />
            </Link>
            <Link href='https://www.instagram.com/harits.abd' target='blank'>
              <AiOutlineInstagram className='hover:cursor-pointer hover:text-white hover:opacity-70 transition duration-300' />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
