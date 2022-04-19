import React from 'react';
import './cta.scss';

const CTA = () => {
  return (
    <div id='cta' className='gpt__cta'>
      <div className='gpt__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>

      <div className='gpt__cta-button'>
        <button type='button'>Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
