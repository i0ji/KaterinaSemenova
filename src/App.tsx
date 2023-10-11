import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slides from "./components/Slides/Slides";
import {Data} from "./data/Storage"
import * as int from "./interfaces"

export default function App() {

    console.log('version: 2.0.0')

    return (
        <>
            <Header/>
            {
                Data.map((section: int.ISlidesData) => (
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