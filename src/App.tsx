import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slides from "./components/Slides/Slides";
import {AnniversarySlides, AnniversaryDescription} from './data/AnniversaryData' ;
import {NagaStyleSlides, NagaStyleDescription} from './data/NagaStyleData';
import {NoraQuizSlides, NoraQuizDescription} from './data/NoraQuizData';
import {NoraStyleSlides, NoraStyleDescription} from './data/NoraStyleData';
import {PatternSlides, PatternDescription} from './data/PatternData';
import {TsumSlides, TsumDescription} from "./data/TsumData";
import {SeagullSlides, SeagullDescription} from "./data/SeagullData";


function App() {

    let lastSlide = true;

    return (
        <div>
            <Header/>

            <Slides slides={SeagullSlides} description={SeagullDescription}/>
            <Slides slides={AnniversarySlides} description={AnniversaryDescription}/>
            <Slides slides={NagaStyleSlides} description={NagaStyleDescription}/>
            <Slides slides={NoraStyleSlides} description={NoraStyleDescription}/>
            <Slides slides={NoraQuizSlides} description={NoraQuizDescription}/>
            <Slides slides={TsumSlides} description={TsumDescription}/>
            <Slides lastSlide={lastSlide} slides={PatternSlides} description={PatternDescription}/>

            <Footer/>
        </div>
    )
}

export default App;