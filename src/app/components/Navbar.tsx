"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
import MenuItems from './MenuItems';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';


  const navItems = [
    {name : "Projects", href: "#work"},
    {name : "Skills", href: "#skills"},
    {name : "Experience", href: "#experience"},
    {name : "Contact", href: "#contact"},
  ]

  const socialLinks = {
    github: "https://github.com/alaminislamrahat",
    linkedIn: "https://www.linkedin.com/in/al-amin-islam-rahat/"
  }
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              {/* vertical line  */}
              <div className='h-6 w-px mx-6 bg-white/10'></div>
              {/* social links  */}
              <div className='flex gap-4'>
                <a href={socialLinks.github} className='p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 transition-colors group'>
                <GithubIcon className='h-5 w-5 text-white/80 group-hover:text-blue-400 transition-colors'/>
                </a>
                <a href={socialLinks.linkedIn} className='p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 transition-colors group'>
                <LinkedInIcon className='h-5 w-5 text-white/80 group-hover:text-blue-400 transition-colors'/>
                </a>
              </div>
          </div>

          {/* responsive  */}
          <button
          onClick={()=> setIsMenuOpen(!isMenuOpen)}
          className='md:hidden bg-white/5 p-2 rounded-lg hover:bg-blue-400/10 transition-colors'
          >
            {
              isMenuOpen ? (
                <XMarkIcon className='h-6 w-6 text-white/80'/>
              ) : <Bars3Icon className='h-6 w-6 text-white/80'/>
            }
          </button>

        </div>
            {isMenuOpen && (
              <motion.div
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0}}
               className='md:hidden mt-4 pb-4 space-y-4'
              >
                {
                  navItems.map((item)=>
                  <a
                  key={item.href}
                  href={item.href}
                  onClick={()=> setIsMenuOpen(false)}
                  className='block px-4 py-2 text-white/80 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors cursor-pointer'
                  >
                    {
                      item.name
                    }
                  </a>
                  )
                }
                <div className='pt-4 border-t border-white/5 flex gap-4'>
                <a href={socialLinks.github} className='p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 transition-colors group'>
                <GithubIcon className='h-5 w-5 text-white/80 group-hover:text-blue-400 transition-colors'/>
                </a>
                <a href={socialLinks.linkedIn} className='p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 transition-colors group'>
                <LinkedInIcon className='h-5 w-5 text-white/80 group-hover:text-blue-400 transition-colors'/>
                </a>
                </div>
              </motion.div>
            )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
