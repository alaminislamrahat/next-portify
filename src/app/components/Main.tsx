"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiTailwindcss } from "react-icons/si"

const Main = () => {
  const fallbackImage =
    "https://via.placeholder.com/600x400.png?text=Project+Preview"

  const projects = [
    {
      title: "Chill Gamer",
      description:
        "Chill Game is an engaging web platform built with React, MongoDB, Node.js, Express.js, and Firebase. It offers real-time multiplayer, secure authentication, and smooth performance.",
      tech: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TailwindCss", icon: SiTailwindcss, color: "#06b6d4" },
        { name: "NodeJs", icon: FaNodeJs, color: "#68a063" },
        { name: "ExpressJs", icon: SiExpress, color: "#AAAAAA" },
      ],
      image: "https://i.ibb.co/h1RNp9m/Screenshot-2025-01-11-125215.png",
    },
    {
      title: "Another Project",
      description:
        "This is another amazing full-stack project showcasing scalability, clean UI, and robust backend services.",
      tech: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TailwindCss", icon: SiTailwindcss, color: "#06b6d4" },
        { name: "NodeJs", icon: FaNodeJs, color: "#68a063" },
        { name: "ExpressJs", icon: SiExpress, color: "#AAAAAA" },
      ],
      image: "https://i.ibb.co/h1RNp9m/Screenshot-2025-01-11-125215.png",
    },
    {
      title: "Another Project",
      description:
        "This is another amazing full-stack project showcasing scalability, clean UI, and robust backend services.",
      tech: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TailwindCss", icon: SiTailwindcss, color: "#06b6d4" },
        { name: "NodeJs", icon: FaNodeJs, color: "#68a063" },
        { name: "ExpressJs", icon: SiExpress, color: "#AAAAAA" },
      ],
      image: "https://i.ibb.co/h1RNp9m/Screenshot-2025-01-11-125215.png",
    },
    
  ]

  return (
    <section className="py-32 relative" id="work">
      <div className="max-w-7xl mx-auto px-6">
        {/* section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
            Selected Work
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full" />
        </motion.div>

        {/* project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-lg"
            >
              {/* image */}
              <Image
                src={project.image || fallbackImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />

             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main
