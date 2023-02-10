import React from 'react';
import clickTrackerIcon from './assets/icons/click-tracker.jpeg';

const Header = () => {
  return (
    <>
    <header id='header'>
        <img id='clickTrackerIcon' src={clickTrackerIcon} alt="Click Tracker Icon" />
        <p id='clickTrackerTitle'>Click Tracker</p>
    </header>
    </>
  )
}

export default Header