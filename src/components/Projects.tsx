import React from 'react'
import { FaExternalLinkAlt , FaCode } from "react-icons/fa";

export const projects = [
  {
    img: 'https://i.postimg.cc/L4JZ6JcQ/project-gestioneventos.png',
    title: 'Project 1',
    description: 'A brief description of Project 1 and its main features.',
    technologies: ['HTML', 'CSS', 'Angular', 'Java', 'Spring', 'MySQL', 'JPA','RestApi', 'WebSocket', 'JWT', 'Postman', 'Bootstrap'],
    sourceLink: 'https://github.com/yourusername/project1',
    demoLink: 'https://yourproject1.demo.com'
  },
  {
    img: 'https://i.postimg.cc/Pxj5BrRS/sales-project.png',
    title: 'Project 2',
    description: 'A brief description of Project 2 and its main features.',
    technologies: ['HTML', 'CSS', 'Angular', 'Java', 'Spring', 'MySQL', 'JPA','RestApi', 'WebSocket', 'JWT', 'Postman', 'Bootstrap'],
    sourceLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2019/01/estudio-de-casi-de-un-portafolio-online.jpg',
    title: 'Project 3',
    description: 'A brief description of Project 2 and its main features.',
    technologies: ['Vue', 'Vuetify', 'CSS'],
    sourceLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2019/01/estudio-de-casi-de-un-portafolio-online.jpg',
    title: 'Project 4',
    description: 'A brief description of Project 2 and its main features.',
    technologies: ['Vue', 'Vuetify', 'CSS'],
    sourceLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2019/01/estudio-de-casi-de-un-portafolio-online.jpg',
    title: 'Project 5',
    description: 'A brief description of Project 2 and its main features.',
    technologies: ['Vue', 'Vuetify', 'CSS'],
    sourceLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourproject2.demo.com'
  },
  // Agrega más proyectos aquí
];



export default function Projects() {
  return (
    <section id="project" className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">Proyectos</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (

            <div key={index} className="flex flex-col md:flex-row w-full p-2 bg-gray-900/25 border border-gray-400/30 rounded-lg shadow-md hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <div className="flex-1 flex flex-col justify-between p-4">
                <h3 className="mb-2 text-xl font-semibold text-cyan-100">{project.title}</h3>
                <p className="mb-4 text-gray-300/80">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="rounded-full bg-cyan-300/10 border border-cyan-100/50 px-3 py-1 text-xs text-cyan-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-300 text-sm rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-300 text-sm rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <FaCode className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
              <img
                src={project.img}
                alt={`Project ${index + 1}`}
                className="w-full md:w-1/2 h-auto object-cover rounded-md"
              />
            </div>
        ))}
      </div>
    </section>
  )
}
