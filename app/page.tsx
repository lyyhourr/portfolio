"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import HomePage from '@/components/HomePage'
import Project from '@/components/Project'
import React from 'react'

export default function Home() {

  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto">
      <main className="h-full">
        <section id='home' className='snap-start' >
          <HomePage />
        </section>
        <section id='project' className='snap-start'>
          <Project />
        </section>
        <section id='experience' className='snap-start'>
          <Experience />
        </section>
        <section id='about' className='snap-start'>
          <About />
        </section>
        <section id='contact' className='snap-start'>
          <Contact />
        </section>
      </main>
    </div>

  )
}
