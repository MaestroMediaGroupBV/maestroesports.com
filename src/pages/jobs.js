import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { FaTwitter, FaTwitch, FaFacebookF, FaInstagram  } from 'react-icons/fa'
import GraphicalIllustrator from '../openings/MaestroEsports_Graphical-illustrator.pdf';
import MotionDeisgner from '../openings/MaestroEsports_Motion-Designer.pdf';


import '../components/Card.css'
import '../components/jobs.css'

import Footer from '../components/Footer'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Button = styled.button`
  margin-top: 30px;
  margin-left: 200px;
  font-size: 17px;
  font-weight: 600;
  color: black;
  background: white;
  padding: 9px 20px;
  border: 1px solid black;
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
    background: blue;
    color:white;
    }

    @media(max-width: 720px) {
      font-size: 14px;
      margin-top: 20px;
      margin-left: 20px;
      padding: 6px 16px;
  }
`

const jobPage = () => (
  <Layout>
    <SEO title="Jobs" />
    <div className="jobsHero">
    <div className="HeaderGroup">
    <img src={require
          ('../images/min/rsz_logo_64-min.png')}
          width="42" />
    <h3>Maestro Esports</h3>
    </div>
      
    </div>
    <div className="titleHeader">
    <h1>Join our team!</h1>
    <p>At Maestro Esports, you are surrounded by some of the brightest minds in gaming.
     Our structure is flat, meaning that your ideas and opinions are constantly not only
     in demand but also heard. Each day will be met with complex and challenging tasks we
     hope to solve together. Quick decision making allows us to create products which shape
     and define the nature of the Esports market. We value team chemistry and team work above
     all else and have a friendly and fast paced work environment.</p>
    </div>
    <div className="jobs">
    <p>Current Openings</p>
    <div className="Cardjob">
      <div>
        <p>Starts: Right away</p>
        <h3>Motion Designer</h3>
      </div>
      <div>
        <a href={MotionDeisgner} target = "_blank"><Button>View opening</Button></a>
      </div>
    </div>

    <div className="Cardjob">
      <div>
        <p>Starts: Right away</p>
        <h3>Graphical Illustrator</h3>
      </div>
      <div>
        <a href={GraphicalIllustrator} target = "_blank"><Button>View opening</Button></a>
      </div>
    </div>

    </div>

    <div className="jobsSection">
      <div className="jobsSectionContent">
        <h2>Ready to join<br/> the Maestro<br/> revolution?</h2>
      </div>
      <div className="jobsSectionContent">
        <span class="emoji">🌍</span><br/>
        <h3>International</h3>
        <p>Choice to work remotely or at our offices located in the Netherlands.</p>
      </div>
      <div className="jobsSectionContent">
      <span class="emoji">🌌</span><br/>
        <h3>Adventure</h3>
        <p>Maestro succeeds and grows from the people who are part of our organization, Join us in shaking up the esport scene by <strike>executing order 66.</strike></p>
      </div>
    </div>

    <div className="jobsSection">
      <div className="jobsSectionContentwc">
        <span class="emoji">🌈🤠👌</span><br/>
        <h3>Work Culture</h3>
        <p>At Maestro we have a fun and non discriminating work environment, an equal opportunity employer, and acts in this capacity without regard to race, color, religion, sex, national origin, age, or disability.</p>
      </div>
      <div className="jobsSectionContent">
        <span class="emoji">🎉</span><br/>
        <h3>Yearly Meetups</h3>
        <p>Yearly Meetups where we take part in a variety of fun, relaxing and adventurous activities in different countries around the world.</p>
      </div>
      <div className="jobsSectionContent">
      <span class="emoji">🎨</span><br/>
        <h3>Personal Development</h3>
        <p>Grow alongside us as we continually reinvest in developing your skills, providing a platform for you to reach your full potential.</p>
      </div>
    </div>
    <div className="spacer"></div>
    <Footer />
  </Layout>
)

export default jobPage