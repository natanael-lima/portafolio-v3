'use client'

import AboutMe from '@/components/AboutMe'
import Portfolio from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';

export default function Home() {
  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 relative">
      {/*<div className="absolute inset-0 opacity-20 pointer-events-none cover" style={{ backgroundImage: 'url(/bg4.jpg)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>*/}
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col lg:flex-row items-start lg:space-x-8 space-y-6 lg:space-y-0 max-w-7xl">
        {/* Sección de información del perfil */}
        <Profile/>

        {/* Sección principal con contenido */}
        <section className="w-full lg:w-2/3 bg-opacity-5 backdrop-filter backdrop-blur-3xl rounded-3xl p-4 lg:pt-[calc(4rem+1rem) border border-gray-400/30 h-full overflow-y-auto relative pt-[calc(3rem+1rem)]">
          {/* Header con navegación semántica */}
          <Header/>
          {/* Renderiza todas las secciones verticalmente */}
          <AboutMe />
          <Portfolio />
          <ContactMe />
        </section>
        
      </main>
      <Footer/>

    </div>
  );
}