import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './sections/Home';
import Agenda from './sections/Agenda';
import ImportantDates from './sections/ImportantDates';
import Introductions from './sections/Introductions';
import Organizers from './sections/Organizers';
import Speakers from './sections/Speakers';
import Topics from './sections/Topics';
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  function changeNavColor() {
    if (window.scrollY >= 1000) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  window.addEventListener('scroll', changeNavColor);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Home />
        {/* <Speakers /> added to home*/}
        <Introductions />
        <Agenda />
        <Topics />
        <ImportantDates />
        {/* <Organizers /> added to impt */}

        <div
          onClick={() => scroll.scrollToTop()}
          className={show? 'scroll active' : 'scroll'}
        >
          <ArrowUpwardIcon  style={{width:"20px",height:"20px"}}/>
        </div>

      </div>

      <Footer />
    </div >
  );
}

export default App;
