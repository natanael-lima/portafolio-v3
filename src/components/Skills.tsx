import React from 'react'
import {  FaJava, FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaDocker, FaGitAlt , FaGithub } from "react-icons/fa";
import { SiSpring, SiCoreldraw, SiAdobephotoshop,SiCsharp,SiPostman,SiJsonwebtokens  } from "react-icons/si";
import { BiLogoPostgresql,BiLogoTypescript } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const skills = [
    { name: 'Java', icon: <FaJava size={30} className="text-blue-600" /> },
    { name: 'C#', icon: <SiCsharp size={30} className="text-violet-700" /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={30} className="text-blue-600" /> },
    { name: 'HTML', icon: <FaHtml5 size={30} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={30} className="text-blue-500" /> },
    { name: 'Spring', icon: <SiSpring size={30} className="text-lime-500" /> },
    { name: 'WPF', icon: <DiDotnet size={30} className="text-blue-600" /> },
    { name: 'Angular', icon: <FaAngular size={30} className="text-red-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={30} className="text-purple-600" /> },
    { name: 'MySQL', icon: <GrMysql size={30} className="text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt  size={30} className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub size={30} className="text-black" /> },
    { name: 'Docker', icon: <FaDocker size={30} className="text-blue-400" /> },
    { name: 'Postman', icon: <SiPostman  size={30} className="text-orange-600" /> },
    { name: 'JWT', icon: <SiJsonwebtokens  size={30} className="text-rose-600" /> },
    { name: 'CorelDRAW', icon: <SiCoreldraw size={30} className="text-lime-600" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop  size={28} className="text-blue-500" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql size={30} className="text-blue-600" /> }
  ];

export default function Skills() {
  return (
     <section className="rounded-md text-gray-200">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="block rounded-md p-2 shadow-sm border border-transparent hover:border-gray-200/50 focus:outline-none focus:ring flex flex-col justify-center items-center"
          > {/*border border-gray-400/30*/}
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              {skill.icon}
            </span>
            <h2 className="mt-2 font-bold">{skill.name}</h2>
          </span>
        ))}
      </div>
    </section>
  )
}
