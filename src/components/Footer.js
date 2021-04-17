import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Send me a message
        </p>
        <p className='footer-subscription-text'>
          :)
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='message'
              type='text'
              placeholder='Your message'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About me</h2>
            <Link to='/'>hobbies</Link>
            <Link to='/'>interests</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact me</h2>
            <Link to='/'>Contact no</Link>
            <Link to='/'>email id</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Profiles</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>Linkedin</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Amulya Portforlio
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>copyright @ Amulya Venkatapathi</small>
          <div class='social-icons'>
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
