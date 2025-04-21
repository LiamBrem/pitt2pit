import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content-wrapper">
        <div className="left-section">
          <h1>Ubers to PIT from <span className="price">$9</span></h1>
          <h2>Split your ride with other verified Pitt students</h2>
          
          <div className="powered-by">
            <span>Powered by</span>
            <img src={`${process.env.PUBLIC_URL}/uber_logo.png`} alt="Uber" className="partner-logo" />
            <span>and</span>
            <img src={`${process.env.PUBLIC_URL}/lyft_logo.png`} alt="Lyft" className="partner-logo" />
          </div>
        </div>

        <div className="right-section">
          <div className="destination-card">
            <h3>Where are you headed?</h3>
            <p>Choose your destination to get started</p>
            
            <button className="destination-button">
              <span className="icon">✈️</span>
              Take me to the airport
              <span className="arrow">→</span>
            </button>
            
            <button className="destination-button">
              <span className="icon">🏛️</span>
              Take me back to Pitt
              <span className="arrow">→</span>
            </button>

            <p className="terms">By selecting a destination, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/cathy.png`}
        alt="Cathy"
        className="background-image"
      />
    </div>
  );
};

export default LandingPage;