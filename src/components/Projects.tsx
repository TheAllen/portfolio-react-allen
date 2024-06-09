import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section 
        id="projects"
        className="border-b border-neutral-900 pt-24 mb-20"
    >
        <motion.h2 
        initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 1}} whileInView={{opacity: 1, y: 0}}
        className="my-20 text-center text-4xl font-serif">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-violet-500">Projects</span>
        </motion.h2>

        <motion.div>
            {PROJECTS.map((project, index) => (
                <motion.div 
                initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 1 + index*0.25}}
                key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            width={320}
                            height={250}
                            className="mb-6 rounded"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="text-sm mb-2 text-neutral-200">Source code: {project.link}</p>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded-xl bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>

    </section>
  )
}

export default Projects