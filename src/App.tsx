import React from "react";
import * as int from "declarations/interfaces";
import {Footer, Header, Slides} from "components/index";

import {Data} from "src/data";

export default function App() {
    console.log("version: 2.4.0.0");

    return (
        <>
            <Header />
            {Data.map((section: int.ISlidesData) => (
                <section key={section.id}>
                    <Slides
                        slides={section.slides}
                        description={section.description}
                        lastSlide={section.lastSlide}
                    />
                </section>
            ))}
            <Footer />
        </>
    );
}
