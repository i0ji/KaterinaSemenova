import * as int from "declarations/interfaces";
import {Footer, Header, Slides} from "components/index";

import {Data} from "data/index";

// import {Data} from "src/data";

export default function App() {
    // console.log("version: 2.3.1.2");

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
