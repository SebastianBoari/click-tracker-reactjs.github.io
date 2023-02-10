import React from 'react'
import clickTrackerIcon from './assets/icons/click-tracker.jpeg';

const Footer = () => {
  return (
    <>
    <footer id='footer'>
        <div id='footerPanel'>
            <img id='footerImg' src={clickTrackerIcon} alt="" />
            <h2 id='footerTitle'>Click Checker</h2>
            <p id='footerTxt'>by Sebastian Boari</p>
        </div>
    </footer>
    </>
  )
}

export default Footer