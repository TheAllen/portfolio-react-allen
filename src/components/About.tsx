import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { LazyMotion, motion, domAnimation, useInView} from 'framer-motion'
import { useEffect, useRef } from 'react'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
    }, [isInView])
    return (
        <section 
            className="border-b border-neutral-900 pt-4 mb-20"
            id="about-me"
            ref={ref}
            >
            <LazyMotion features={domAnimation}>
                <motion.h2 
                initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 0.25}} whileInView={{opacity: 1, y: 0}}
                className="py-20 my-20 text-center text-4xl font-serif">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-violet-500">About Me</span>
                </motion.h2>
                <div className="flex flex-wrap items-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 0.25}}
                    className="w-full lg:w-1/2 lg:p-8">
                        <motion.div className="flex items-center justify-center" >
                            <motion.img className="aspect-square rounded-full drop-shadow-2xl hue-rotate-30" src={aboutImg} alt="about" />
                        </motion.div>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5}}
                    className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
                        </div>
                    </motion.div>
                </div>
            </LazyMotion>
        </section>
  )
}

export default About