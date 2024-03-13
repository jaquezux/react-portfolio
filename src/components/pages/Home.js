import React, { useEffect } from 'react';
import Hero from '../Hero';
// import Experience from '../Experience';
// import Projects from '../Projects';



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
            {/* <Experience/> */}
            {/* <Projects/> */}

        </>
    )
}

export default Home