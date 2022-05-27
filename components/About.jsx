import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function About() {
  const { istyped, y, screenH } = useContext(AppContext);

  return (
    <section
      id="sobre"
      className={istyped ? 'py-64 bg-dark-blue' : 'hidden'}
    >
      <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center">
        <div className={y >= screenH * 0.3 ? 'animate-fadeIn' : 'hidden'}>
          <h2 className="text-light-green text-3xl">{'<sobre>'}</h2>
          <div className="flex flex-row items-center">
            <article className="text-aquamarine py-10 text-2xl px-5 leading-10">
              <section>
                Olá! Sou Kevin,
                Tenho 19 anos, sou nascido e criado no interior do Espirito Santo, na cidade de
                Nova Venécia.
              </section>
              <section>
                Meu interesse por Desenvolvimento de Software surgiu á 3 anos atrás, ainda
                no Ensino Médio, quando descobri o Bitcoin e o mundo Open Source.
              </section>
              <section>
                Atualmente estou estudando desenvolvimento Web, tanto Front-end quanto Back-end,
                na
                <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer" className="underline hover:text-white"> Trybe</a>
                . Meu objetivo é
                <strong> DESENVOLVER SOLUÇÕES </strong>
                de tecnologia que impactam na vida das
                pessoas, além disso estou sempre aberto a aprender novas tecnologias e paradigmas.
              </section>
            </article>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGwesWvHmwpxQ/profile-displayphoto-shrink_800_800/0/1634081515586?e=1658966400&v=beta&t=tOClnuYtRxYkuSe9y_uzUYlTxsShBXG4EphVrF04V90" alt="My personal" className="rounded-md w-1/3 shadow-lg shadow-light-green" />
          </div>
          <h2 className="text-light-green text-3xl">{'<sobre>'}</h2>
        </div>
      </div>
    </section>
  );
}
