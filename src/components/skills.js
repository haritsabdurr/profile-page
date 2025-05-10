'use client';

import { motion } from 'framer-motion';
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiGithubBadge,
  DiNpm,
  DiGo,
} from 'react-icons/di';

export default function Skills() {
  const skill = {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      {
        name: 'JavaScript',
        icon: <DiJavascript1 className='text-yellow-500' />,
      },
      {
        name: 'NPM',
        icon: <DiNpm className='text-red-500' />,
      },
      { name: 'SASS', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },

      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'MySql', icon: <DiMysql className='text-blue-400' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-400' /> },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='max-w-[800px] mx-auto mt-24 px-6 md:px-2 text-gray-200 pb-8 md:py-4'
    >
      <div className='mb-5'>
        <h2 className='text-xl md:text-2xl font-medium text-center'>Skills</h2>
        <hr className='w-12 h-1 mt-1 bg-blue-500 border-blue-600 mx-auto' />
      </div>
      <div className='border border-blue-500 border-opacity-70 p-6 rounded-lg bg-blue-500/20 shadow-lg w-full'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:pl-16'>
          {skill.technologies.map((tech, id) => (
            <div key={id} className='flex items-center space-x-2 ml-6'>
              <span className='text-2xl'>{tech.icon}</span>
              <span className='opacity-80 font-thin'>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
