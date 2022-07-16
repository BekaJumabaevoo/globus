import React from 'react';
import Intro from '../components/Intro';
import Helpers from '../components/Helpers';
import CartsL from '../components/CartsL';
import Advintages from '../components/Advantages';
import Footer from '../components/Footer';
import Anket from '../components/Anket';

const main = () => {
  return (
    <>
     <Intro/>
     <Helpers/>
     <CartsL id={'#polsha'}/>
     <CartsL id={'#latvia'}/>
     <Anket/>
     <Advintages/>
     <Footer/>
    </>
  );
};

export default main;