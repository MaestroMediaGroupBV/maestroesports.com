import React from 'react'
import { Link } from 'gatsby'
import { FaTwitter, FaTwitch, FaFacebookF, FaInstagram  } from 'react-icons/fa'

import Layout from './layout'

const footer = () => (
    <Layout>
     <div className="Footer">
    <div className="FooterMain">
      <div className="FooterGroup">
          <div className="Footer1">
          <h2>Maestro Esports</h2>
          <div className="SocialsGroup">
            <div className="Socials"><a href="https://twitter.com/masesports"><FaTwitter /></a></div>
            <div className="Socials"><a href="https://www.facebook.com/maestrosesports/"><FaFacebookF /></a></div>
            <div className="Socials"><a href="https://www.twitch.tv/masesports"><FaTwitch /></a></div>
            <div className="Socials"><a href="https://www.instagram.com/maestroesports/"><FaInstagram /></a></div>
          </div>
          </div>
          <div className="Footer2">
          <h3>Sitemap</h3>
          <Link to="/">Home</Link>
          <br/>
          <a href="https://www.linkedin.com/in/joannewatson-gg/detail/recent-activity/posts/">News</a>
          <br/>
          <Link to="/jobs">Jobs</Link>
          </div>
          <div className="Footer3">
          <h3>Contact us</h3>
          <a>+31 641 716 201</a>
          <br />
          <a>contact@maestroesports.com</a>
          </div>
          <div className="Footer4">
          <h4>We would love to hear from you</h4>
          <p>would you like to work with us? Send us a message or call us, we'd love to talk!</p>
          </div>
      </div>
    </div>   
        <p class="Copyright">© 2019 Maestro Media Group B.V.</p>
    </div>
    </Layout>
  )
  
  export default footer