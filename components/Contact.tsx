import React from 'react'
import PageLayout from './PageLayout'

export default function Contact() {
    return (
        <PageLayout scrollDownTo='home' scrollUpTo='about' disableScrollDown>
            <main className=' flex flex-col '>
                <section className='flex flex-col gap-3 items-center'>
                    <p className='text-4xl '>Contact Me</p>
                </section>
            </main>
        </PageLayout>
    )
}
