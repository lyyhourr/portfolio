import About from '@/components/About'
import Animation from '@/components/Animation'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import HomePage from '@/components/HomePage'
import Project from '@/components/Project'
import React, { ReactNode } from 'react'

const pages: { id: string, child: ReactNode }[] = [
  {
    id: "home",
    child: <HomePage />
  },
  {
    id: "project",
    child: <Project />
  },
  {
    id: "experience",
    child: <Experience />
  },
  {
    id: "about",
    child: <About />
  },
  {
    id: "contact",
    child: <Contact />
  },
]

export default function Home() {

  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto">
      <main className="h-full">
        {
          pages.map((item, i) => (
            <Animation id={item.id} key={i}>
              {item.child}
            </Animation>
          ))
        }
      </main>
    </div>

  )
}
