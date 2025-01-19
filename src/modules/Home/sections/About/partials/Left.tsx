import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {

  // content
  const content = [
    "Hello, I’m Vichet, a full-stack and DevOps engineer with a passion for building innovative web, mobile, and backend solutions. Since beginning my journey in 2020, I’ve expanded my expertise into microservices, cloud technologies, server configurations, and Linux system administration, making me adept at managing both development and operations seamlessly.",

    "My goal is to craft scalable, efficient, and user-focused digital experiences. Whether it’s developing APIs, architecting microservices, or optimizing server infrastructure, I thrive on solving complex challenges and creating systems that drive impact",
    "I’m always eager to collaborate and turn ideas into exceptional digital solutions.",
    "Here are some of the technologies and tools I’ve been working with recently:"
  ]

  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >

        {content.map((e:string, i:number) => <p key={i} > {e} </p>)}

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li key={i} className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400' > <IoMdArrowDropright className='text-sky-400 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </motion.div>
  )
}

export default Left
