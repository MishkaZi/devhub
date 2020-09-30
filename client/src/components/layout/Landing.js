import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Hub</h1>
          <p className='lead'>
            Create developer profile/portfolio, share posts and get help grom
            other developers!
          </p>
          <div className='buttons'>
            <Link to='register' class='btn btn-primary'>
              Register
            </Link>
            <a href='login' class='btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;