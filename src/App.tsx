import React from 'react';
import './App.css';
import { NavBar } from './layouts/NavbarAndFooter/navbar';
import { Footer } from './layouts/NavbarAndFooter/footer';
import { HomePage } from './layouts/HomePage/homepage';

export const App=() =>{
  return (
    <>
   <NavBar/>
   <HomePage/>
   <Footer/>
   </>
  );
}
