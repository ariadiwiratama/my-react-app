import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json';
import Cell from "../components/Cell";
import styled from 'styled-components'


const SectionCaption = styled.p`
  margin: 0 auto 50px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-widht: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn Complete <br />Developing Courses</h1>
        <p>Join the simple course now.</p>
        <Link to="/page-2/">Watch The Video</Link>
        <div className="Logos">
          <img src={require('../images/gatsby-icon.png')}
          width="50" />
          <img src={require('../images/logo-figma.png')}
          width="50" />
          <img src={require('../images/logo-sketch.png')}
          width="50" />
          <img src={require('../images/logo-framer.png')}
          width="50" />
          <img src={require('../images/logo-studio.png')}
          width="50" />          
          <img src={require('../images/logo-swift.png')}
          width="50" />                
        </div>
      </div>
      <Wave />
    </div>
    <div className="Cards">
      <h2>6 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper8.jpg')} />
        <Card 
          title="Javascript for Beginner"
          text="11 sections"
          image={require('../images/wallpaper9.jpg')} />
        <Card 
          title="Basic HTML+CSS"
          text="5 sections"
          image={require('../images/wallpaper10.jpg')} />
        <Card 
          title="Learn Java"
          text="7 sections"
          image={require('../images/wallpaper11.jpg')} />
        <Card 
          title="Learn Vue Basic"
          text="8 sections"
          image={require('../images/wallpaper12.jpg')} />
        <Card 
          title="Learn Laravel Advanced"
          text="15 sections"
          image={require('../images/wallpaper13.jpg')} />                    
      </div>  
    </div>
    <Section
      image={require('../images/wallpaper13.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="In this course you will learn React for design from the very basic. By the end of the course you will be familiar with React and able to create your own UI with amazing micro animation."
     />

     <SectionCaption>12 sections - 5 hours</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
        title={cell.title}
        image={cell.image} />
      ))}
     </SectionCellGroup>
    <div className="Footer">
      <div className="FooterGroup">
        <h3>Start to build your own web app, <br /> contact us on Twitter.</h3>
        <button>Tweet Now</button>
      </div>
      <div className="FooterText">
        <p>About</p>
        <p>Terms</p>
        <p>Contact Us</p>
        <p>Blog</p>
        <p>Group</p>
        <p>Contest</p>
        <p>Privacy</p>
        <p>Connect</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage