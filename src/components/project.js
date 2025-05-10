'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import project1 from '@/asset/project1.jpg';
import project2 from '@/asset/project2.jpg';
import project3 from '@/asset/project3.jpg';
import project4 from '@/asset/project4.png';
import project5 from '@/asset/project5.jpg';

export default function Project() {
  const project = [
    {
      name: 'Mooflix Movie Library',
      description:
        'This is a movie library web app built with Next.js and powered by the TMDB API. It allows users to browse a wide collection of movies with pagination and real-time search functionality. The interface is styled using Tailwind CSS for a clean and responsive design.',
      image: project1,
      stack: ['NextJS', 'TailwindCSS', 'TMDB API'],
      ref: 'https://mooflix-blond.vercel.app',
    },
    {
      name: 'Boxking Point of Sales',
      description:
        'POS app was developed for Boxking Ricebox, a food stall business, to streamline order and transaction management. The frontend is built with React.js, styled using Tailwind CSS, and utilizes React Router DOM for navigation.',
      image: project2,
      stack: ['ReactJS', 'TailwindCSS', 'ExpressJS', 'MongoDB'],
      ref: 'https://boxking-pos.vercel.app',
    },
    {
      name: 'Web Kerja Praktik FTI',
      description:
        'This web app was built to redesign the current website. It features a frontend developed with Next.js and Tailwind CSS, providing a responsive and modern user interface. The backend is powered by Express and MongoDB. ',
      image: project3,
      stack: ['NextJS', 'TailwindCSS', 'ExpressJS', 'MongoDB'],
      ref: 'https://webkpbaru.vercel.app',
    },
    {
      name: 'KAI Website Redesign',
      description:
        'This project was developed as part of a course requirement. The task involved selecting a website and redesigning it with an emphasis on creating a more streamlined and user-friendly visual design.',
      image: project4,
      stack: ['Figma', 'Whimsical'],
      ref: 'https://www.figma.com/design/57YD35d8M4ZZ4lCaR6BhSd/KAI?node-id=99-10987&p=f&t=CGrjXUoVp8fKP2MM-0',
    },
    {
      name: 'Ocistok Mobile App Prototype',
      description:
        'Collaboratively designed the Ocistok mobile application during an internship, focusing on user-friendly navigation, clean layout, and streamlined user flows to enhance overall usability and accessibility.',
      image: project5,
      stack: ['Figma', 'Whimsical'],
      ref: 'https://www.figma.com/design/vYTF1VDWpByoPElmVS39Hq/Untitled--Copy-?node-id=0-1&p=f&t=BjK0FWnc0XKtvpZ3-0',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='max-w-[800px] mx-auto px-6 md:px-2 mt-24 mb-20'
    >
      <div className='mb-5'>
        <h2 className='text-xl md:text-2xl font-medium text-center'>
          Projects
        </h2>
        <hr className='w-12 h-1 mt-1 bg-blue-500 border-blue-600 mx-auto' />
      </div>
      {project.map((project, index) => (
        <Link href={project.ref} target='blank'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className='group overflow-hidden md:flex hover:cursor-pointer mb-8'
          >
            <div className='w-56 h-32 p-1 mx-auto border border-blue-950 group-hover:border-blue-800 transition-colors duration-300 rounded-sm'>
              <Image
                src={project.image}
                alt='Card Image'
                className='w-full h-full object-cover rounded-sm'
              />
            </div>
            <div className='flex-grow text-center mt-3 md:mt-0 md:ml-4 md:text-start md:w-4/12'>
              <span className='flex justify-center md:justify-start group-hover:text-blue-500 transition-colors duration-300'>
                <p className='md:text-lg font-medium '>{project.name}</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='mt-1.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </span>
              <p className='text-justify mt-2 opacity-80 font-thin group-hover:opacity-95 transition duration-300'>
                {project.description}
              </p>
              <div className='flex gap-3 mt-4 justify-center md:justify-start'>
                {project.stack.map((stack, index) => (
                  <p className='py-1 px-2 border-2 border-blue-950 bg-blue-500/20 rounded-md text-xs md:text-sm font-thin'>
                    {stack}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
