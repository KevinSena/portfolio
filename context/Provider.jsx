/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [istyped, setIstyped] = useState(false);
  const [y, setY] = useState(0);
  const [screenH, setScreenH] = useState();

  useEffect(() => {
    setScreenH(window.screen.availHeight);
  }, []);

  const contextValue = {
    istyped,
    setIstyped,
    y,
    screenH,
  };

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener('scroll', (e) => handleNavigation(e));
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
