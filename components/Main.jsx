import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function Main({ word }) {
  const [typing, setTyping] = useState('');
  const [index, setindex] = useState(0);
  const { istyped, setIstyped } = useContext(AppContext);

  useEffect(() => {
    if (index === word.length - 1) return;
    setTimeout(() => setindex(index + 1), 150);
    clearTimeout(index);
  }, [index, word]);

  useEffect(() => {
    setTyping(typing + word[index]);
    if (index === word.length - 1) {
      setIstyped(true);
    }
  }, [index, word]);

  return (
    <main className="bg-dark-blue w-full h-screen">
      <section className="max-w-5xl mx-auto min-h-full flex flex-col justify-center transition-all">
        <div className="text-light-green text-7xl mb-8">
          {'<'}
          { typing }
          {'/>'}
        </div>

        <div className={
          `text-lavender
          text-5xl
          duration-300
          ${istyped ? 'opacity-100 mt-5' : 'opacity-0 mt-10'}`
          }
        >
          Meu nome é Kevin de Souza Sena.
        </div>

        <div className={
          `text-morning-blue
          text-4xl
          duration-700
          ${istyped ? 'opacity-100 mt-5' : 'opacity-0 mt-10'}`
          }
        >
          E esse é o meu portfólio web de projetos que venho desenvolvendo.
        </div>
      </section>
    </main>
  );
}

Main.propTypes = {
  word: PropTypes.string,
}.isRequired;

export default Main;
