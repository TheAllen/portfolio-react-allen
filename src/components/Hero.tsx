import { motion } from 'framer-motion'
import { HERO_CONTENT } from '../constants'
import HeroImage from '../assets/heropic.png'
import { slideNameFromLeft } from '../utils/motion'



const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pt-40 pb-10 lg:mb-35 mb-20">
        <div className="flex flex-wrap">
            {/* Introduction */}
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{opacity: 1, y: 0}} animate={slideNameFromLeft} className="pb-16 text-7xl font-extralight lg:mt-16 lg-text-8xl">ALLEN LI</motion.h1>
                    <motion.span 
                        initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.5, delay: 0.25}}}
                        className="text-4xl font-serif">
                        <motion.span 
                            className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-slate-500 to-violet-200'>
                                Software
                        </motion.span>
                        <motion.span
                            className='text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-slate-500 to-violet-500'> Engineer</motion.span>
                    </motion.span>
                    <motion.p 
                        initial={{x: -100, opacity: 0}} whileInView={{opacity: 1, y: 0}} animate={{x: 0, opacity: 1, transition: {duration: 0.5, delay: 0.5}}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            {/* Hero Image */}
            <motion.div 
                initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 100, transition: {duration: 0.8, delay: 0.4}}}
                className="w-full lg:w-1/2 lg:p-8 rounded-lg">
                <div className="flex justify-center">
                    <img src={HeroImage} alt="Hero Image"/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero