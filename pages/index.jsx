import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Main from '../components/Main';
import Technologies from '../components/Technologies';
import Provider from '../context/Provider';

export default function Home() {
  return (
    <Provider>
      <div className="w-full">
        <Header menu={['sobre', 'tecnologias', 'projetos']} />
        <Main word=" Hello World " />
        <About />
        <Technologies />
      </div>
    </Provider>
  );
}
