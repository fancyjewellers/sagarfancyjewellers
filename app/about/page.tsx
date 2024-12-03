import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Farmlogo from '@/components/About/Farmlogo';
import Connect from '@/components/About/Connect';
import Family from '@/components/About/Family';




export default function Home() {
  return (
    <>
      <Header />
      <main >
      <Farmlogo />
       <Family />
       <Connect />
        
      </main>
      <Footer />
    </>
  );
}
