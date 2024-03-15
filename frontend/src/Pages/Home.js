import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Collection from '../Components/Newcollection/Collection';
import Offers from '../Components/Offers/Offers';

export const Home = () => {
  return (
    <div className="home-page">
      <Hero/>
      <Popular/>
      <Collection/>
      <Offers/>
    </div>
  )
}

export default Home;