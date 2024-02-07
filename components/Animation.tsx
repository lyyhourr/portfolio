"use client"
import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import { useInView } from 'react-intersection-observer';


interface Section {
    children: ReactNode
    id: string
}

export default function Animation({ children, id }: Section) {
    const [isSecondInView, setSecondInView] = useState<boolean>(false);

    const handleSecondInView = (inView: boolean) => {
        setSecondInView(inView);
    };
    return (
        <section id={id} className='snap-start w-screen overflow-hidden'>
            <InViewWatcher onInViewChange={handleSecondInView}>
                {(inView: boolean) => (
                    <View inView={inView} >
                        {children}
                    </View>
                )}
            </InViewWatcher>
        </section>
    )
}
interface ViewProps {
    inView: boolean;
    children: ReactNode
}

function View({ inView, children }: ViewProps) {
    return (
        <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.25, }}
        >
            {children}
        </motion.section>
    );
}



interface InViewWatcherProps {
    onInViewChange: (inView: boolean) => void;
    children: (inView: boolean) => React.ReactNode;
}

function InViewWatcher({ onInViewChange, children }: InViewWatcherProps) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    React.useEffect(() => {
        onInViewChange(inView);
    }, [inView, onInViewChange]);

    return <div ref={ref}>{children(inView)}</div>;
};

