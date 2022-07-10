import React from 'react';
import '../styles/Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name Is Girish</h2>
        <div className='prompt'>
          <p>A software developer with passion for learning and creating</p>
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
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React-JS</li>
              <li>Next-JS</li>
              <li>Chakra-UI</li>
              <li>Tailwind CSS</li>
              <li>Mantine-UI</li>
              <li>Material-UI</li>
            </ul>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Back-End</h2>
            <ul>
              <li>Express</li>
              <li> Mongo-DB </li>
              <li>Mongoose</li>
              <li>Hasura</li>
            </ul>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Programming Languages</h2>
            <ul>
              <li>C</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>Typescript</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
