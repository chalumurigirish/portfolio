import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='content'>Email: girishchalumuri@gmail.com</div>

      <div className='content'>Phone number: 7893797547 </div>
      <div className='content'>WhatsApp: 9490724215</div>
      <div className='content'>
        <a
          href='https://drive.google.com/file/d/17BrhB6nCOM3GFYqWqxvcbf5tXcJRPkaW/view?usp=sharing'
          download
        >
          Resume download
        </a>
      </div>
    </div>
  );
};

export default Contact;
