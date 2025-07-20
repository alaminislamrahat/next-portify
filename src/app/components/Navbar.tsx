"use client"
import React from 'react';
import { motion } from "framer-motion"
import MenuItems from './MenuItems';
const Navbar = () => {
  const navItems = [
    {name : "Projects", href: "#work"},
    {name : "Sills", href: "#skills"},
    {name : "Experience", href: "#experience"},
    {name : "Contact", href: "#contact"},
  ]
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='fixed backdrop-blur-2xl z-50 w-full text-white bg-black/50 transition-all duration-300 ease-out'>
      <div className='max-w-7xl mx-auto px-6 py-3'>

        <div className='flex justify-between items-center'>
          <motion.div
          whileHover={{scale:1.05}} className='flex justify-center items-center gap-2 group'
          >
            <div className='relative h-8 w-8 rounded-full'>
              {/* Spinning border */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 animate-spin [mask-image:linear-gradient(transparent,white)]'>
                {/* Inner black circle to cover center */}
                <div className='absolute inset-[2px] bg-black rounded-full'></div>
              </div>

              {/* Static centered text */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
                  R
                </span>
              </div>
            </div>
            <span className='font-semibold text-white group-hover:text-blue-400 transition-colors'>
              Rahat
            </span>
          </motion.div>

          {/* nav  */}
          <div className='hidden md:flex items-center gap-6'>
              <div className='flex items-center gap-6 bg-black/80 px-4 py-2 rounded-full border border-white/5 shadow-lg shadow-blue-400/5'>
               {
                navItems.map((item, i) => (
                 <MenuItems key={item.name} href={item.href} index={i}>{item.name}</MenuItems>
                ))
               }
              </div>
              <div className='h-6 w-px mx-6 bg-white/10'></div>
          </div>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
