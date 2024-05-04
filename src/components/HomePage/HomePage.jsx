import React from 'react';
import Header from "./1-header/header"
import Hero from "./2-hero/hero"
import Maim from "./3-main/main"
import Foter from "./foter/foter"
const HomePage = () => {
  return (
    <div className='father'>
      <Header/>
      <Hero/>
      <div className='vidider'></div>
      <Maim/>
      <div className='vidider'></div>
      <Foter/>
    </div>
  );
}

export default HomePage;
