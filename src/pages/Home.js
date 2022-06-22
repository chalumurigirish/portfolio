import React from 'react';
import '../styles/Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name Is Girish</h2>
        <div className='prompt'>
          <p>A software developer with passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              HTML,CSS, React-JS, NEXT-JS, Chakra-ui, Mantine-JS, Material-UI
            </span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Express, Mongo-DB, Mongoose, Hasura </span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Programming Languages</h2>
            <span>C*, Python, JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
