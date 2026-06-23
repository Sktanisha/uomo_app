import React from 'react'
import Header from "../../components/layout/header/Header";
import Footer from '../../components/layout/footer/Footer';
import Banner from '../../components/home/Banner';

export default function Mainlayout({children}){
    return ( <>
    <Header/>
    
    {children}
    <Footer/>
    </>

    );
}
