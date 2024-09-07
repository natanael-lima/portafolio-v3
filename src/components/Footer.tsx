import React from 'react'

export default function Footer() {
  return (
    <footer className=" text-gray-300 p-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <p className="text-center text-xs text-gray-500 mb-4 md:mb-0">
            © 2024 
            <a href="https://github.com/natanael-lima" className="text-gray-300 transition hover:text-gray-100 ml-1">Natanael Lima</a>. All rights reserved.
            </p>
            
            <section className="flex flex-col md:flex-row items-center">
            <p className="text-center text-xs text-gray-500 mb-2 md:mb-0">
                Created with
                <a href="#" className="text-gray-300 transition hover:text-gray-100 ml-1">NextJS </a>
                and
                <a href="#" className="text-gray-300 transition hover:text-gray-100 ml-1">TailwindCSS</a>.
            </p>
            </section>
        </div>
    </footer>

  )
}
