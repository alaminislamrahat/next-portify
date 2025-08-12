"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import rahat from "../../../public/rahat portfolio.jpg"
const Hero = () => {
  const {scrollY} = useScroll();
  const y = useTransform(scrollY, [0,500], [0,100]);
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative group lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-violet-600 to-pink-400 bg-clip-text text-transparent mb-6"
            >
              Full Stack
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-blue-400 via-violet-600 to-pink-500 bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-white/80 text-xl mb-8"
            >
              Specializing in React, Node.js, Next.js, and MongoDB.
              Building scalable applications with modern tech stacks.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y:20 }}
              animate={{ opacity: 1, y:0 }}
              transition={{opacity:{ duration: 0.8,delay:1.2},
              y:{duration:0.9,delay:1.2}
            }}
              whileHover={{
                scale: 1.05,
                transition: {duration:0.2,  ease: "easeInOut" },
                
              }}
              
              className="px-8 py-4 rounded-full relative overflow-hidden bg-black/30 border border-white/10 hover:border-blue-400/30 transition-all group "
            >
              <span className="text-white group-hover:text-blue-400 transition-colors">
                Explore more
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </motion.div>

              {/* image  */}
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease:"easeOut" }}
              className="relative lg:w-1/3"
              style={{y}}
              >
                {/* animated border  */}
                <div className="relative w-full group">
                    <motion.div
                    initial={{scale:0.95}}
                    animate={{scale:1.05}}
                    transition={{
                        duration:2,
                        repeat:Infinity,
                        repeatType:"mirror"
                    }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 via-violet-500/30 to-pink-500/30 opacity-50"
                    />
                {/* floating animation */}
              <motion.div
              animate={{y:[0, -20, 0]}}
              transition={{
                duration : 6,
                repeat : Infinity,
                ease:"easeInOut"
              }}
              className="relative  w-full rounded-3xl overflow-hidden border border-white/10 bg-black/70 backdrop-blur-sm"
              >
                <Image src={rahat} alt="avatar" height={500} width={500}
                className="object-cover w-full scale-110 group-hover:scale-100 transition-transform duration-500"
                
                />
                <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                />
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration:0.6
                }}
                className="bottom-8 left-8 absolute"
                >
                    <div className="text-2xl text-white font-bold ">
                        Based In
                        <motion.span
                        className="block bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent"
                        animate={{backgroundPosition:['0% 50%','100% 50%']}}
                        transition={{duration:3,repeat:Infinity, repeatType:'mirror'}}
                        style={{backgroundSize:'200% 200%'}}
                        >
                            Rangpur, Bangladesh
                        </motion.span>
                    </div>
                </motion.div>
            
              </motion.div>
              </div>
              </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
