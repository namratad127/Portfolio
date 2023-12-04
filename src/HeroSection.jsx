import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const iconData = [
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/',
    className: 'social-icons',
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/',
    className: 'social-icons',
  },
  {
    icon: faGithub,
    link: 'https://github.com/',
    className: 'social-icons',
  },
  // Add more icons as needed
];

function HeroSection() {

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mt-5 hero-item">
          <h1>Namrata <br/> Dubey</h1>
          <div className="social-icons">
            {iconData.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.icon} className="social-icons bounce" />
              </a>
            ))}
          </div>
          <button className='btn-resume'>Resume</button>
        </div>
        <div className="col-md-4 hero-item">
        <img
          src="https://finodemy.com/images/courses/courses-banner-woman-new.png"
          alt="mypic"
        />

        </div>
        <div className="col-md-4 hero-item">
        <h5 className='intro'>Introduction</h5>
        <h3 className='post'>Frontend Developer</h3>
        <p className='post'>Experienced Frontend Developer with a passion for creating stunning user interfaces and seamless user experiences. With [X+] years in the industry, I have honed my skills in various frontend libraries and frameworks, delivering elegant and performant web applications.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
