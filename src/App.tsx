import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Seagull from './components/Section/Seagull/Seagull';
import Anniversary from "./components/Section/Anniversary/Anniversary";
import NagaStyle from "./components/Section/NagaStyle/NagaStyle";
import NoraQuiz from "./components/Section/NoraQuiz/NoraQuiz";
import NoraStyle from "./components/Section/NoraStyle/NoraStyle";

export const scrollLink = {
    id: 1,
    url: '#about',
}

function App() {
    return (
        <div>
            <Header/>
            <Seagull/>
            <Anniversary/>
            <NagaStyle/>
            <NoraStyle/>
            <NoraQuiz/>
            <Footer/>
        </div>
    )
}

export default App