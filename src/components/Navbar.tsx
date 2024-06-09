import logo from "../assets/logo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { motion } from "framer-motion"


const Navbar = () => {

    const linkedin: string = "https://www.linkedin.com/in/allen-li-69b632141/";
    const github: string = "https://github.com/theallen";
    const insta: string = "https://www.instagram.com/lala_liang/";

    return (
        <motion.nav initial={{y: -200, opacity: 0}} whileInView={{opacity: 1, y: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.4}}}  className="fixed top-0 left-0 w-full shadow-md py-4 px-6 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                    <a className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300" href="#">
                        <img className="rounded-full mx-2 w-100" src={logo} width={120} alt="logo" />
                    </a>
                    <div className="font-sans md:font-serif text-xl"> 李嘉亮 </div>
                </div>

                <div className='w-[600px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className="cursor-pointer hover:text-violet-500">
                            About
                        </a>
                        <a href="#experience" className="cursor-pointer hover:text-violet-500">
                            Experience
                        </a>
                        <a href="#skills" className="cursor-pointer hover:text-violet-500">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer hover:text-violet-500">
                            Projects
                        </a>
                        <a href="#contact" className="cursor-pointer hover:text-violet-500">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a 
                    className="hover:text-sky-500"
                    href={linkedin}>
                        <FaLinkedin />
                    </a>
                    <a 
                    className="hover:text-gray-600"
                    href={github}>
                        <FaGithub />
                    </a>
                    <a 
                    className="hover:text-red-500"
                    href={insta}>
                        <FaInstagram />
                    </a>
                </div>
            </div>  
        </motion.nav>      
    )
}

export default Navbar