import React from 'react'
import {  FaJava, FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaDocker, FaGitAlt , FaGithub } from "react-icons/fa";
import { SiSpring, SiCoreldraw, SiAdobephotoshop,SiCsharp,SiPostman,SiJsonwebtokens  } from "react-icons/si";
import { BiLogoPostgresql,BiLogoTypescript } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const skills = [
    { name: 'Java', icon: <FaJava size={24} className="text-red-600" /> },
    { name: 'C#', icon: <SiCsharp size={24} className="text-purple-500" /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={24} className="text-blue-600" /> },
    { name: 'HTML', icon: <FaHtml5 size={24} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} className="text-blue-500" /> },
    { name: 'Spring', icon: <SiSpring size={24} className="text-green-500" /> },
    { name: 'WPF', icon: <DiDotnet size={24} className="text-blue-600" /> },
    { name: 'Angular', icon: <FaAngular size={24} className="text-red-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={24} className="text-purple-600" /> },
    { name: 'MySQL', icon: <GrMysql size={24} className="text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt  size={24} className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub size={24} className="text-black" /> },
    { name: 'Docker', icon: <FaDocker size={24} className="text-blue-400" /> },
    { name: 'Postman', icon: <SiPostman  size={24} className="text-red-600" /> },
    { name: 'JWT', icon: <SiJsonwebtokens  size={24} className="text-yellow-600" /> },
    { name: 'CorelDRAW', icon: <SiCoreldraw size={24} className="text-blue-500" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop  size={24} className="text-blue-500" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql size={24} className="text-blue-600" /> }
  ];

export default function Skills() {
  return (
     <section className="rounded-md text-gray-200">
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {skills.map((skill, index) => (
          <a
            key={index}
            className="block rounded-xl border border-gray-400/30 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              {skill.icon}
            </span>
            <h2 className="mt-2 font-bold">{skill.name}</h2>
          </a>
        ))}
      </div>
    </section>
  )
}
