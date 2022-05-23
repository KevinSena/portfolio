import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function Header({ menu }) {
  const { y, istyped, screenH } = useContext(AppContext);
  const [local, setLocal] = useState('');

  useEffect(() => {
    if (y < screenH * 0.3) setLocal('');
    if (y >= screenH * 0.3) setLocal('sobre');
  }, [y]);

  return (
    <header className={`transition w-full fixed bg-opacity-70 backdrop-blur-sm ${y > 0 && 'shadow-lg'} ${istyped ? 'opacity-100' : 'opacity-0 h-0'}`}>
      <div className="flex justify-between lg:px-32 py-5">
        <h1 className="text-white font-bold text-2xl">Kevin Sena</h1>
        <ul className="flex flex-row">
          {
            menu.map((e) => (
              <li key={e} className="text-lg hover:text-white cursor-pointer px-3 capitalize">
                <a className={local === e ? 'text-white' : 'text-aquamarine'} href={`#${e}`}>{ e }</a>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  menu: PropTypes.array,
}.isRequired;

export default Header;
