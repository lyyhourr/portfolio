"use client"
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { ReactNode } from 'react'
import { scrollToSection } from './Navbar'
import Image from 'next/image'

interface PageLayout {
    children: ReactNode
    scrollUpTo: string
    scrollDownTo: string
    disableScrollDown?: boolean
    className?: string
}
export default function PageLayout({ children, scrollDownTo, scrollUpTo, disableScrollDown, className }: PageLayout) {
    return (
        <div className={`w-screen h-screen flex flex-col relative ${className} `}>
            <div className='hidden sm:block absolute top-3 right-2 lg:top-6 lg:right-5'>
                <button onClick={() => scrollToSection(scrollUpTo)}>
                    <Image
                        src={"/arrow.png"}
                        width={30}
                        height={30}
                        alt='arrow'
                        className='rotate-180 opacity-40 hover:opacity-100  transition-all w-7 h-7 lg:w-8 lg:h-8 '
                    />
                </button>
            </div>
            <div className='sm:hidden absolute top-8 right-2 '>
                <button onClick={() => scrollToSection(scrollDownTo)}>
                    <Image
                        src={"/arrow.png"}
                        width={40}
                        height={40}
                        alt='arrow'
                        className=' animate-bounce transition-all w-8 h-8 lg:w-10 lg:h-10'

                    />
                </button>
            </div>
            {children}
            {
                disableScrollDown ? (
                    <div></div>
                ) : (
                    <div className='hidden sm:block absolute bottom-2 right-2 lg:bottom-5 lg:right-5'>
                        <button onClick={() => scrollToSection(scrollDownTo)}>
                            <Image
                                src={"/arrow.png"}
                                width={40}
                                height={40}
                                alt='arrow'
                                className=' animate-bounce transition-all w-8 h-8 lg:w-10 lg:h-10'

                            />
                        </button>
                    </div>
                )
            }
        </div>
    )
}
