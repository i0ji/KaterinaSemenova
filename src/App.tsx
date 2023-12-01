import React from 'react';
import * as int from "src/interfaces"
import Header from "components/Header/Header";
import Slides from "components/Slides/Slides";
import Footer from "components/Footer/Footer";
import {Data} from "data/Storage";


export default function App() {

    console.log('version: 2.2.1')

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