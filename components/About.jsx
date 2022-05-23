import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function About() {
  const { istyped, y, screenH } = useContext(AppContext);

  return (
    <section
      id="sobre"
      className={istyped ? `
        h-screen
      bg-dark-blue
      ` : 'hidden'}
    >
      <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center transition-all">
        <div className={y >= screenH * 0.3 ? 'animate-fadeIn' : 'hidden'}>
          <h2 className="text-light-green text-3xl">{'<sobre>'}</h2>
          <div className="flex flex-row items-center">
            <article className="py-10 text-2xl px-5">
              <section className="text-aquamarine">
                Olá! Sou Kevin,
                Tenho 19 anos, sou nascido e criado no interior do Espirito Santo, na cidade de
                Nova Venécia.
              </section>
              <section className=" text-yellow pt-3">
                Meu interesse por Desenvolvimento de Software surgiu á 3 anos atrás, ainda
                no Ensino Médio, quando descobri o Bitcoin e o mundo Open Source
              </section>
              <section className="text-pink pt-3">
                Atualmente estou estudando desenvolvimento Web, tanto Front-end quanto Back-end,
                na
                <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer" className="underline hover:text-white"> Trybe</a>
                , e estou sempre aberto a aprender novas tecnologias e paradigmas.
              </section>
            </article>
            <img src="baldwin.jpg" alt="My personal" className="rounded-md w-1/3 shadow-lg shadow-light-green" />
          </div>
          <h2 className="text-light-green text-3xl">{'<sobre>'}</h2>
        </div>
      </div>
    </section>
  );
}
