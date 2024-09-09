import React from 'react'
import Skills from './Skills'


export default function AboutMe() {
  return (
      <section id="about" className="mb-16">
      {/* Introducción */}
      <div className="">
        <h2 className="text-4xl font-bold text-white/90 mb-4">Sobre Mí</h2>
        <p className="text-gray-200/80 mb-4">
          🖐 ¡Hola! Soy <span className="font-bold text-cyan-50">Analista Programador Universitario</span> de <span className="font-bold text-cyan-50">Jujuy, Argentina</span>. Tengo experiencia en el desarrollo de <span className="font-bold text-cyan-50">aplicaciones web y desktop</span>, así como en la <span className="font-bold text-cyan-50">organización de datos</span>.
        </p>
        <p className="text-gray-200/80 mb-6">
          Mi experiencia como desarrollador se refleja en la implementación de <span className="font-bold text-cyan-50">soluciones prácticas y eficientes</span> utilizando diversos <span className="font-bold text-cyan-50">lenguajes</span> y <span className="font-bold text-cyan-50">frameworks</span>. Mi enfoque se centra en la creación de <span className="font-bold text-cyan-50">software funcional y adaptable</span>, colaborando en todas las etapas del ciclo de vida del desarrollo, desde el <span className="font-bold text-cyan-50">análisis</span> hasta la <span className="font-bold text-cyan-50">implementación</span>.
        </p>
        {/* Skills */}
        <h3 className="text-2xl font-bold text-white/90 mb-4">Habilidades</h3>
        <Skills/>
      </div>
    </section>
  )
}
