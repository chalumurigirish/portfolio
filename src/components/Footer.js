import React from 'react';
import '../styles/Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon />
        <TwitterIcon />
        <FacebookIcon />
        {/* <GitHubIcon /> */}
      </div>
      <p>&copy; girish.co.in</p>
    </div>
  );
};

export default Footer;
