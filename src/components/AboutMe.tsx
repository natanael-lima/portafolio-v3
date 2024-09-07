import React from 'react'
import Skills from './Skills'


export default function AboutMe() {
  return (
      <section id="about" className="mb-16">
      {/* Introducción */}
      <div className="">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Sobre Mi</h2>
        <p className="text-gray-200 mb-4">
          🖐 ¡Hola! Soy Analista Programador Universitario de Jujuy, Argentina. Tengo experiencia en el desarrollo de aplicaciones web y desktop, así como en la organización de datos.
        </p>
        <p className="text-gray-200 mb-6">
          Mi experiencia como desarrollador se refleja en la implementación de soluciones prácticas y eficientes utilizando diversos lenguajes y frameworks. Mi enfoque se centra en la creación de software funcional y adaptable, colaborando en todas las etapas del ciclo de vida del desarrollo, desde el análisis hasta la implementación.
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Skills</h3>
        <Skills/>
      </div>
    </section>
  )
}
