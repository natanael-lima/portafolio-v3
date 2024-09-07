import React from 'react'
import { FaGithub,FaLinkedin,FaFilePdf } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Profile() {
  return (
    <aside className="w-full lg:w-1/3 bg-opacity-5 backdrop-filter backdrop-blur-3xl rounded-3xl p-8 border border-gray-400/30 flex flex-col items-center">
    <img src="https://avatars.githubusercontent.com/natanael-lima" alt="Profile Picture" className="rounded-full w-64 h-64 mb-4" />
    <h1 className="text-2xl font-bold text-white mb-2">Natanael Lima</h1>
    <p className="text-slate-400 mb-6 text-center">
      Software Developer | Programmer Analyst
    </p>
    <div className="flex space-x-4">
      {/* Social Media and CV Links */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-300 hover:text-stone-100 transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-300 hover:text-stone-100 transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-stone-300 hover:text-stone-100 transition-colors duration-300"
      >
        <BsWhatsapp size={24} />
      </a>
      <a
        href="/path-to-your-cv.pdf"
        download
        className="text-stone-300 hover:text-stone-100 transition-colors duration-300"
      >
        <FaFilePdf size={24} />
      </a>
     
    </div>
        <div className="mt-5 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
          Open to Work
        </div>
  </aside>
  )
}
