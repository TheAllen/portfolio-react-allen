import { FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri"
import { FaRust } from "react-icons/fa"
import { SiFlask } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { motion } from "framer-motion";

import JavaIcon from '../assets/icons/java.png'
import PythonIcon from '../assets/icons/Python.png'

const iconVariants: any = (duration: number) => ({
  initial: { y: 0 },
  animate: {
    x: [15, -15],
    y: [15, -15],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Skills = () => {
  return (
    <section id="skills" className="border-b border-neutral-800 pt-24 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, x: 0}} initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100 }} transition={{duration: 0.5, delay: 0.4}} 
      className="my-20 text-center text-4xl font-serif">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-violet-500">Technologies</span>
      </motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x: 0}} initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 0.5, delay: 0.25}}
      className="flex flex-wrap items-center justify-center gap-5 py-14">
        
        {/* Python */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
          {/* <RiJavaFill className="text-7xl text-white-400"/> */}
          <img className="size-20 opacity-80" src={PythonIcon} alt="JavaIcon" />
        </motion.div>
        {/* Java */}
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-400 duration-300">
          {/* <RiJavaFill className="text-7xl text-white-400"/> */}
          <img className="size-20 opacity-80" src={JavaIcon} alt="JavaIcon" />
        </motion.div>
        {/* Rust */}
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300">
          <FaRust className="text-7xl text-neutral-300 size-20 opacity-80"/>
        </motion.div>
        
        {/* AWS */}
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300">
          <FaAws className="text-7xl text-white-400 size-20 opacity-80"/>
        </motion.div>

        {/* NodeJs */}
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-300 duration-300">
          <FaNodeJs className="text-7xl text-green-500 size-20 opacity-80"/>
        </motion.div>

        {/* Typescript */}
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <SiTypescript className="text-7xl text-sky-600 size-20 opacity-80"/>
        </motion.div>
        {/* Go */}
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-200 duration-300">
          <FaGolang className="text-7xl text-sky-500 size-20 opacity-80"/>
        </motion.div>

        {/* Spring Boot */}
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-200 duration-300">
          <BiLogoSpringBoot className="text-7xl text-green-600 size-20 opacity-80"/>
        </motion.div>
        {/* Flask */}
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300">
          <SiFlask className="text-7xl text-white-500 size-20 opacity-80"/>
        </motion.div>
        {/* NestJs */}
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <SiNestjs className="text-7xl text-red-600 size-20 opacity-80"/>
        </motion.div>
        {/* React */}
        <motion.div 
        variants={iconVariants(3.8)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <RiReactjsLine className="text-7xl text-sky-400 size-20 opacity-80"/>
        </motion.div>

        {/* Postgres */}
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <BiLogoPostgresql className="text-7xl text-sky-600 size-20 opacity-80"/>
        </motion.div>
        {/* MongoDB */}
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <SiMongodb className="text-7xl text-green-600 size-20 opacity-80"/>
        </motion.div>

        {/* Docker */}
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <FaDocker className="text-7xl text-sky-600 size-20 opacity-80"/>
        </motion.div>
        {/* K8s */}
        <motion.div 
        variants={iconVariants(3.2)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <SiKubernetes className="text-7xl text-sky-600 size-20 opacity-80"/>
        </motion.div>
        {/* Kafka */}
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-full border-8 border-gray-700 p-4 mx-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <SiApachekafka className="text-7xl text-gray-700 size-20 opacity-80"/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills