import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Provider from '../context/Provider';

export default function Home() {
  return (
    <Provider>
      <div className="w-full">
        <Header menu={['About', 'Technologies', 'Projects']} />
        <Main word=" Hello World " />
        <section className="h-screen">d</section>
      </div>
    </Provider>
  );
}
