import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slides from "./components/Slides/Slides";
import {Data} from "./data/Storage"
import {SlidesData} from "./interfaces"


function App() {


    return (
        <>
            <Header/>
            {
                Data.map((section: SlidesData) => (
                    <section key={section.id}>
                        <Slides slides={section.slides} description={section.description}
                                lastSlide={section.lastSlide}/>
                    </section>
                ))
            }
            <Footer/>
        </>
    )
}

export default App;