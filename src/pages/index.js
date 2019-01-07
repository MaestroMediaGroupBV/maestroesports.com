import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTwitter, FaTwitch, FaFacebookF, FaInstagram  } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Footer from '../components/Footer'
import Wave from '../components/Wave'
import Card from '../components/card'

const Button = styled.button`
    background: linear-gradient(102.24deg, #ff436d 0%, #2258ff 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 5px;
    color: white;
    border: none;
    padding: 12px 40px;
    font-weight: 600;
    font-size: 20px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
        cursor: pointer;
    }

    @media(max-width: 720px) {
      font-size: 16px;
  }
`
const Buttonvm = styled.button`
    background: white;
    border-radius: 5px;
    color: black;
    border-color: black;
    padding: 12px 40px;
    font-weight: 600;
    font-size: 20px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
        cursor: pointer;
    }

   @media(max-width: 720px) {
      font-size: 16px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
    <div className="Hero">
    <div className="HeaderGroup">
    <img src={require
          ('../images/min/rsz_logo_64-min.png')}
          width="42" />
    <h3>Maestro Esports</h3>
    </div>
      <div className="HeroGroup">
        <h2>WINNERS DON'T QUIT</h2>
        <h1>Maestro is a value driven, focoused and ambitious esports
        organisation based in the Netherlands, taking the industry by storm.</h1>
        <p>Your home of esports and house music. A company of Maestro Media Group B.V.</p>
        <Link to ='./jobs'><Button>Jobs👀</Button></Link>
        <Wave />
      </div>
    </div>
    <div className="CardsHeader">
      <div className="NewsTitle">
      <h2>We make waves</h2>
      <h3>The latest News from across Maestro Media Group</h3>
      <p>Recent News</p>
      </div>

    </div>
    <div className="Cards">
      <div className="CardGroup">
      
        <a href="https://www.linkedin.com/pulse/impact-your-esports-brand-sponsorship-joanne-watson/">
        <div className="Card">
          <img src={require('../images/min/ecs-min.jpg')} />
          <h3>The Impact of Your Esports Brand on Sponsorship</h3>
          <p>November 20, 2018</p>
        </div>
        </a>

        <a href="https://www.linkedin.com/pulse/3-secrets-take-your-esports-brand-next-level-joanne-watson/">
        <div className="Card">
          <img src={require('../images/min/ecs1-min.jpg')} />
          <h3>3 Secrets to Take Your Esports Brand to the Next Level</h3>
          <p>October 23, 2018</p>
        </div>
        </a>

        <a href="https://www.linkedin.com/pulse/5-ways-keep-your-esports-brand-likeable-joanne-watson/">
        <div className="Card">
          <img src={require('../images/min/group-min.jpg')} />
          <h3>5 Ways to Keep Your Esports Brand Likeable</h3>
          <p>October 3, 2018</p>
        </div>
        </a>

        <a href="https://www.linkedin.com/pulse/how-important-esports-brand-joanne-watson/">
        <div className="Card">
          <img src={require('../images/min/r61-min.jpg')} />
          <h3>How Important is an Esports Brand?</h3>
          <p>September 19, 2018</p>
        </div>
        </a>
        
        <a href="https://www.linkedin.com/pulse/3-ways-structure-your-esports-brand-joanne-watson/">
        <div className="Card">
          <img src={require('../images/min/r6finals-min.jpg')} />
          <h3>3 Ways to Structure Your Esports Brand</h3>
          <p>September 5, 2018</p>
        </div>
        </a>

        <a href="https://www.linkedin.com/pulse/creating-emotionally-charged-esports-brand-joanne-watson/">
        <div className="Card">
          <img src={require('../images/min/crowd-min.jpg')} />
          <h3>Your Esports Brand: How to Capture the Hearts of Fans</h3>
          <p>August 27, 2018</p>
        </div>
        </a>

      </div>
      <div className="ViewMore">
      <a href="https://www.linkedin.com/in/joannewatson-gg/detail/recent-activity/posts/" target="_blank">
        <Buttonvm>View More</Buttonvm>
      </a>
      </div>
    </div>

   <Footer />
    
  </div> 
  </Layout>
)

export default IndexPage
