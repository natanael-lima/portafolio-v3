import React from 'react'
import { FaExternalLinkAlt , FaCode } from "react-icons/fa";

export const projects = [
  {
    img: 'https://i.postimg.cc/Vv7sr9Lh/hotel-project.png',
    title: 'Hotel Reservation System',
    description: 'Registra usuarios, permite reservar y cancelar habitaciones, administra tarifas, procesa pagos e integra reseñas de usuarios.',
    technologies: ['React','Tailwind','Vite','HTML','Node.js', 'Docker', 'Spring','Postgresql'],
    sourceLink: 'https://github.com/natanael-lima/hotel-reservation-system',
    demoLink: 'https://yourproject1.demo.com'
  },
  {
    img: 'https://i.postimg.cc/mkZ2gpRM/ecommerce-project.png',
    title: 'E-commerce Platform',
    description: 'Gestiona usuarios, categorías y productos desde un panel administrativo con búsqueda y filtrado para una mejor experiencia.',
    technologies: ['Java', 'HTML', 'CSS', 'Angular', 'RESTful', 'Postman', 'MySQL', 'Spring Boot','JWT'],
    sourceLink: 'https://github.com/natanael-lima/ecommerce-web-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/PxQ5hnGT/lovely-project.png',
    title: 'Lovely Dating App',
    description: 'Aplicación de citas con registro de usuarios, perfiles, chat en tiempo real y un motor de búsqueda de coincidencias.',
    technologies : ['Java', 'HTML', 'CSS', 'Angular', 'RESTful', 'Postman', 'MySQL', 'Spring Boot','JWT', 'WebSocket'],
    sourceLink: 'https://github.com/natanael-lima/lovely-dating-web-app.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/7PXZW4MN/psm-project.png',
    title: 'Postulants System Management',
    description: 'Registra usuarios, permite seguimiento de postulaciones y cuenta con un rol administrativo para gestionar y revisar solicitudes.',
    technologies : ['Java', 'Spring Boot', 'Thymeleaf', 'HTML', 'Bootstrap', 'JPA', 'MySQL'],
    sourceLink: 'https://github.com/natanael-lima/applications-web-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/HjGmTZqm/project-gestioninventario.png',
    title: 'Comprehensive Sales System',
    description: 'Gestiona ventas, productos y configuraciones de automóviles clásicos con roles de usuario específicos.',
    technologies :['Java', 'Spring Boot','Thymeleaf', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    sourceLink: 'https://github.com/natanael-lima/sales-management-web-applications.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/L4JZ6JcQ/project-gestioneventos.png',
    title: 'Event Management System',
    description: 'Programa y rastrea reuniones de negocios con informes detallados y acceso para los participantes a agendas y detalles.',
    technologies : ['HTML', 'CSS', 'Bootstrap', 'Angular', 'NodeJS', 'Postman', 'Express', 'TypeScript', 'MongoDB'],
    sourceLink: 'https://github.com/maxi1103/TpFinal-PySW-2022',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/KzLFw5MM/project-playa.png',
    title: 'Parking System Management',
    description: 'Control de vehículos, emisión de boletos, gestión de clientes, seguimiento de espacios y generación de informes de ventas.',
    technologies: ['C#', 'WPF', '.NET','SQL Server'],
    sourceLink: 'https://github.com/natanael-lima/parking-management-desktop-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/jj0MvQt9/project-optica.png',
    title: 'Optical System Management',
    description: 'Gestiona clientes, productos, ventas y usuarios con funciones de registro, modificación e informes detallados.',
                  
    technologies: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Stored Procedure'],
    sourceLink: 'https://github.com/natanael-lima/optical-management-desktop-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/vZLqmqJz/project-clinical.png',
    title: 'Clinical Shift Management',
    description: 'Programa citas, gestiona pacientes, médicos y obras sociales, asigna turnos y envía notificaciones por correo electrónico.',
    technologies: ['Java', 'Spring', 'JPA', 'Rest API', 'Postman', 'Unit Tests', 'MySQL'],
    sourceLink: 'https://gitlab.com/lima73777/poo-2021-grupo02',
    demoLink: 'https://yourproject2.demo.com'
  },
  // Agrega más proyectos aquí
];




export default function Projects() {
  return (
    <section id="project" className="mb-16">
      <h2 className="text-4xl font-bold text-white/90 mb-4">Proyectos</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (

            <div key={index} className="flex flex-col md:flex-row w-full p-2 bg-gray-900/25 border border-gray-400/30 rounded-lg shadow-md hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <div className="flex-1 flex flex-col justify-between p-4">
                <h3 className="mb-2 text-xl font-semibold text-cyan-100/90">{project.title}</h3>
                <p className="mb-4 text-gray-200/60">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="rounded-full bg-cyan-300/10 border border-cyan-100/60 text-cyan-100/90 px-2 py-1 text-xs ">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="font-semibold flex items-center px-4 py-2 bg-gray-200 text-sm rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="font-semibold flex items-center px-4 py-2 bg-gray-200 text-sm rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
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
