import React from 'react';
import '../styles/Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon
          onClick={() =>
            (window.location.href =
              'https://www.linkedin.com/in/girish-chalumuri-089908240/')
          }
        />

        <GithubIcon
          onClick={() =>
            (window.location.href = 'https://github.com/chalumurigirish')
          }
        />
        <EmailIcon
          onClick={() =>
            (window.location.href =
              'https://accounts.google.com/b/1/AddMailService')
          }
        />
      </div>
      <p>&copy; girishdev.in</p>
    </div>
  );
};

export default Footer;
