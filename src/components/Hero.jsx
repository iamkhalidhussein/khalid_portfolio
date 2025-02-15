import React from 'react'
import { styles } from '../style.js'

const Hero = () => {
  return (
    <section className='relative w-full h-[720px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915EFF]'>Khalid</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Developer crafting seamless <br className='sm:block hidden'/> web solutions and solving tech challenges</p>

          <a 
            href="https://www.dropbox.com/scl/fi/lz27dznc0ql5vft8pur90/khalid.pdf?rlkey=6rfan6uym3y3nmc7wj97a576j&st=usjtopv8&dl=1"
            download="Khalid_Resume" 
            className="mt-5 inline-block py-2 px-6 bg-[#915EFF] text-white rounded-lg shadow-lg hover:bg-[#7e4ed5] transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

