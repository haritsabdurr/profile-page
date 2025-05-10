'use client';

import { motion } from 'framer-motion';

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='mx-auto w-40 h-40 bg-blue-500 mt-20'
    >
      Hello Motion
    </motion.div>
  );
}
