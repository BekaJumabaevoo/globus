import React from 'react';
import Intro from '../components/Intro';
import Helpers from '../components/Helpers';
import CartsP from '../components/CartsP';
import CartsL from '../components/CartsL';
import Advintages from '../components/Advantages';
import Footer from '../components/Footer';

const main = () => {
  return (
    <>
     <Intro/>
     <Helpers/>
     <CartsP/>
     <CartsL/>
     <Advintages/>
     <Footer/>
    </>
  );
};

export default main;