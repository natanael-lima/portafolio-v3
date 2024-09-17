import React from 'react'
import { FaGithub,FaLinkedin,FaFilePdf } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { FaHandPointLeft } from "react-icons/fa";
export default function Profile() {
  return (
    <aside className="w-full lg:w-1/3 bg-opacity-2 backdrop-filter backdrop-blur-3xl rounded-3xl p-8 border border-gray-400/30 flex flex-col items-center">
        <img src="https://i.postimg.cc/Gt5v4pp7/me5.webp" alt="Profile Picture" className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-2" />
          <h1 className="text-2xl font-bold text-white/90 mb-1">Natanael Lima</h1>
            <p className="text-gray-200/60 mb-6 text-center">
              Software Developer | Programmer Analyst 
            </p>
          <a href="https://www.linkedin.com/in/natanael-dev/" className="rainbow-gradient flex items-center bg-slate-600 text-slate-200 hover:scale-105 transition-transform mb-6 inline-block rounded-md  px-6 py-2 text-sm font-semibold ">
              Abierto al trabajo
              <FaHandPointLeft className="ml-2 h-4 w-4"/>
          </a>
        
  
        <div className="flex space-x-8">
          {/* Social Media and CV Links */}
          <a
            href="https://www.linkedin.com/in/natanael-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-50 transition-colors duration-300 scale-100 hover:scale-110 transition-transform"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/natanael-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-50 transition-colors duration-300 scale-100 hover:scale-110 transition-transform"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:natanael.lima.dev@gmail.com"
            className="text-gray-300 hover:text-gray-50 transition-colors duration-300 scale-100 hover:scale-110 transition-transform"
          >
            <RiMailSendFill size={24} />
          </a>
          <a
            href="/resume-lima-es.pdf"
            download
            className="text-gray-300 hover:text-gray-50 transition-colors duration-300 scale-100 hover:scale-110 transition-transform"
          >
            <FaFilePdf size={24} />
          </a>
        </div>
        
  </aside>
  )
}
