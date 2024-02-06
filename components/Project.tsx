import React from 'react'
import PageLayout from './PageLayout'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
export default function Project() {
    return (
        <PageLayout scrollDownTo='experience' scrollUpTo='home'>
            <main className=' flex flex-col h-full '>
                <section className='flex flex-col gap-3 items-center'>
                    <p className='text-4xl '>Project</p>
                </section>
                <section className='flex justify-center h-full items-center'>
                    <Carousel className='w-[95%] md:w-[70%]'>
                        <CarouselContent >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 ">
                                    <div className='border-2 rounded-md flex flex-col h-[500px] px-3 '>
                                        <div className='h-[300px] rounded-lg mx-auto my-3 w-[95%] bg-red-300'></div>
                                        <div className='flex flex-col gap-4 my-3 w-[95%] mx-auto'>
                                            <p className='text-center'>project name</p>
                                            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt velit ex tempore magni necessitatibus ipsam esse officia laborum? Assumenda error laudantium consequuntur qui provident officia laborum excepturi hic facere.</p>

                                            <div className='flex justify-between px-5 items-center gap-5 pb-5'>
                                                <Link href={""} className='bg-black text-center w-[150px] py-3 text-white text-xl hover:bg-slate-800 rounded-lg'>Github</Link>
                                                <Link href={"https://recipesboxx.netlify.app/"} className='text-center bg-slate-50 border-black border-2 hover:bg-slate-200 w-[150px] py-3   text-xl rounded-lg'>Visit Live</Link>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </section>
            </main>
        </PageLayout>
    )
}
