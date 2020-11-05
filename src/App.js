import React from 'react';
import './App.css';
import Cards from './Components/cards';
import Exams from './Components/Exams';
import Header from './Components/header';
import LargeScreen from './Components/largeScreen';
import Solution from './Components/solution';
import StudyMaterial from './Components/studyMaterial';
import Subjects from './Components/subjects';
import Testimonials from './Components/testimonials';
function App() {
  return (
    <div className="App">
      <Header />
      <LargeScreen/>
      <Cards/>
      <StudyMaterial/>
      <Exams/>
      <Subjects/>
      <Solution/>
      <Testimonials/>
    </div>
  );
}

export default App;
