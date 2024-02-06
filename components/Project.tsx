import React from 'react'
import PageLayout from './PageLayout'

export default function Project() {
    return (
        <PageLayout scrollDownTo='experience' scrollUpTo='home'>
            <main className=' flex flex-col '>
                <section className='flex flex-col gap-3 items-center'>
                    <p className='text-4xl '>Project</p>
                </section>
            </main>
        </PageLayout>
    )
}
