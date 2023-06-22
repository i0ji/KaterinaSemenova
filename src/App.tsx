import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Seagull from './components/Section/Seagull/Seagull';
import Anniversary from "./components/Section/Anniversary/Anniversary";

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
        <Footer/>
      </div>
  )
}

export default App