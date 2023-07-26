import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Seagull from './components/Section/Seagull/Seagull';
import Anniversary from "./components/Section/Anniversary/Anniversary";
import NagaStyle from "./components/Section/NagaStyle/NagaStyle";
import NoraQuiz from "./components/Section/NoraQuiz/NoraQuiz";
import NoraStyle from "./components/Section/NoraStyle/NoraStyle";
import Tsum from "./components/Section/Tsum/Tsum";
import Pattern from "./components/Section/Pattern/Pattern";

function App() {
    return (
        <div>
            <Header/>
            <Seagull/>
            <Anniversary/>
            <NagaStyle/>
            <NoraStyle/>
            <NoraQuiz/>
            <Tsum/>
            <Pattern/>
            <Footer/>
        </div>
    )
}

export default App