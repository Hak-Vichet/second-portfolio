import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {

  // content
  const content = [
    "Hello, I'm Vchet, a dedicated web developer with a deep passion for crafting captivating online experiences. My journey into the world of web development commenced in 2020, and I've also gained valuable experience in the fields of IoT and networking, which have further enriched my knowledge and confidence.",
    // "Since then, I've had the incredible opportunity to work in diverse environments, including an advertising agency, a start-up, a large corporation, and a student-led design studio. These experiences have shaped my expertise in crafting accessible and inclusive products and digital experiences. Currently, I'm thrilled to be a part of Upstatement, where I collaborate with a range of clients to bring their visions to life.",
    "I believe in the power of the web to connect people and create meaningful interactions. With a keen eye for detail and a commitment to user-centric design, I strive to deliver exceptional web solutions that leave a lasting impact.",
    "Let's collaborate and turn your ideas into remarkable digital experiences!",
    "Here are a few technologies I have been working with recently:"
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
