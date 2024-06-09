import { EXPERIENCES } from "../constants"
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-b border-neutral-900 pt-24 mb-20"
    >
      <motion.h2 
      whileInView={{opacity: 1, x: 0}} initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 0.75}} 
      className="my-20 text-center text-4xl font-serif">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-violet-500">Experience</span>
      </motion.h2>
      
      <motion.div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
          whileInView={{opacity: 1, x: 0}} initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 0.25 + index*0.25}}
          key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span className="text-s text-violet-400 font-mono">{experience.company}</span>
              </h6>
              {experience.description.map((des, ind) => (
                <p key={ind} className="mb-4 text-neutral-400">{des}</p>
              ))}
              {/* <p className="mb-4 text-neutral-400">{experience.description}</p> */}
              {experience.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded-xl bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-300">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience