"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Main = () => {
  return (
    <section className='py-32 relative' id='work'>
        <div className='max-w-7xl mx-auto px-6'>
            {/* section heading  */}
            <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:0.6}}
            className='flex flex-col items-center mb-20'
            >
                <h1 className='text-white text-4xl md:text-5xl font-bold mb-4 text-center'>Selected Work</h1>
                <div className='h-1 w-24 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full'/>
            </motion.div>

            {/* project  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>

            </div>
        </div>
    </section>
  )
}

export default Main