import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import {
  faTerminal, faDatabase, faServer, faLock, faCode, faDisplay, faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faHtml5, faCss3, faJsSquare, faReact, faDocker, faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import AppContext from '../context/AppContext';

const icons = [faTerminal, faGithub, faHtml5, faCss3, faJsSquare, faReact, faDocker, faDatabase,
  faNodeJs, faServer, faLock, faCodeBranch, faCode, faDisplay, faDatabase];
const techNames = ['Unix e Bash', 'Git e Github', 'HTML', 'CSS', 'JavaScript', 'React', 'Docker', 'MySQL',
  'Node JS', 'REST API', 'Autenticação JWT', 'CI/CD e Deploy', 'TypeScript', 'POO e Solid', 'MongoDB'];

export default function Technologies() {
  const { istyped, y, screenH } = useContext(AppContext);
  return (
    <section
      id="tecnologias"
      className={istyped ? 'py-60 min-h-screen bg-dark-blue' : 'hidden'}
    >
      <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center transition-all">
        <div className={y >= screenH * 1.3 ? 'animate-fadeIn' : 'hidden'}>
          <h2 className="text-light-green text-3xl">{'<tecnologias>'}</h2>
          <h3 className="text-aquamarine text-4xl py-3 pl-4">Estas são as tecnologias que eu domino.</h3>
          <div className="flex flex-row flex-wrap">

            {
              icons.map((icon, index) => (
                <div
                  key={`${icon}-${Math.random()}`}
                  className={`bg-blue-darker
                  rounded-lg flex flex-col justify-center
                  text-center
                  w-36
                  h-36
                  m-4
                  py-2
                  hover:shadow-lg
                  hover:shadow-pink hover:translate-y-4`}
                >
                  <h4 className="text-white">{techNames[index]}</h4>
                  <FontAwesomeIcon icon={icon} className="text-6xl text-lavender p-2" />
                </div>
              ))
            }

          </div>
          <h2 className="text-light-green text-3xl">{'<tecnologias>'}</h2>
        </div>
      </div>
    </section>
  );
}
