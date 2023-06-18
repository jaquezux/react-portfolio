import React, { useEffect } from 'react';
import Hero from '../Hero';
import Experience from '../Experience';



function Home() {
    useEffect(() => {
        if(window.location.search.includes("experience")) {
            const element = document.querySelector("#experience");
            element.scrollIntoView({ behavior: 'smooth'});
        }
    }, [])

    return (
        <>
            <Hero />
            <Experience/>
        </>
    )
}

export default Home