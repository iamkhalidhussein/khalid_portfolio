import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc/index.js';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../style.js';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} pb-10 text-center`}>
          Technolgies
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((technology, index) => (
          <div className='w-28 h-28' key={technology.name} index={index}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(Tech, 'technologies');