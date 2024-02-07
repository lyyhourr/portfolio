"use client"
import React from 'react'
import { routes, scrollToSection } from './Navbar'

export default function Routes() {
    return (
        <>
            <button onClick={() => scrollToSection("home")} className='hover:underline'>Home</button>

            {
                routes.map(item => item !== "contact" && (
                    <button key={item} onClick={() => scrollToSection(item)} className='hover:underline first-letter:uppercase'>{item}</button>
                ))
            }
        </>
    )
}
