import React from 'react'
import {FaLinkedin,FaGithub,FaMailBulk  } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section id="contact" className='mb-16'>
      <h2 className="text-3xl font-bold text-gray-100 mb-4">Contactame</h2>
        <div className="flex flex-wrap justify-start gap-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <FaLinkedin className="h-6 w-6" />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <FaGithub className="h-6 w-6" />
            GitHub
          </a>
          <a
            href="mailto:johndoe@example.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <FaMailBulk className="h-6 w-6" />
            Email
          </a>
        </div>
      </section>
  )
}
