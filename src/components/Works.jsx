import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { github } from '../assets';
import { SectionWrapper } from '../hoc/index.js';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Link } from 'lucide-react';

const ProjectCard = ({index, name, description, tags, image, source_code_link, live_link}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full h-full'>

      <div className='relative w-full h-[180px] group'>
        <img src={image} alt={name} />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <Link onClick={() => window.open(live_link, '_blank')} className='w-10 h-10 relative right-16 top-14 opacity-0 group-hover:opacity-100 invisible group-hover:visible text-green-500 cursor-pointer'/>
          <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
          </div>
        </div>
      </div>

      <div className='md:mt-5 mt-12'>
        <h3 className='text-white font-bold text-2xl'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {
          tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))
        }
      </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

        <div className='w-full flex'>
          <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          This section showcases a collection of my work, highlighting the practical applications of my skills in front-end development. Each project is a reflection of my dedication to creating responsive, user-friendly, and visually appealing web experiences. You'll find a variety of projects that demonstrate my expertise in HTML, CSS, JavaScript, React, and more, as well as my ability to integrate modern technologies like Node.js, Express, and MongoDB. Explore these projects to see how I bring ideas to life through clean, efficient, and scalable code.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
          {
            projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} {...project} index={index}/>
            ))
          }
        </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects');