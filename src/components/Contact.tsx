import { useState } from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {

  const [emailVisible, setEmailVisible] = useState(false)
  return (
    <motion.section 
      id="contact"
      className="border-b border-neutral-900 pt-24 mb-20"
      initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 100, }} transition={{duration: 1.5, delay: 1}} whileInView={{opacity: 1, y: 0}}
    >
      <h2 className="my-20 text-center text-4xl font-serif">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700  to-violet-500">Get in Touch</span>
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-xl font-serif">
          <button className="py-1 px-2 border-2 rounded-xl text-xl hover:bg-green-500" onClick={() => setEmailVisible(!emailVisible)}>
            Email
          </button>
          {emailVisible && <div className="text-2xl">{CONTACT.email}</div>}
        </p>
      </div>
    </motion.section>
  )
}

export default Contact