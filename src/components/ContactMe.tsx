import React from 'react'
import {FaLinkedin,FaGithub,FaWhatsapp  } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

export default function ContactMe() {
  return (
    <section id="contact" className='mb-4'>
      <h2 className="text-3xl font-bold text-white mb-8">Contactame</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors duration-300 "
          >
            <FaLinkedin className="h-6 w-6" />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors duration-300 "
          >
            <FaGithub className="h-6 w-6" />
            GitHub
          </a>
          <a
            href="mailto:johndoe@example.com"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors duration-300 "
          >
            <RiMailSendFill className="h-6 w-6" />
            Email
          </a>
          <a
            href="mailto:johndoe@example.com"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors duration-300 "
          >
            <FaWhatsapp className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </section>
  )
}
