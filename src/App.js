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

function App() {

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
      </div>

      <Footer />
    </div>
  );
}

export default App;
