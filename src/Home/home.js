import React from 'react'
import './home.css'
import Navigation from '../Navigation/Navigation'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link, Router} from 'react-router-dom'
import Chatbot from 'react-chatbot-kit'
import Feed from "../Feed/feed.js"

function Home() {
  return (
    <div id="home-page">
		<Container fluid>
			<Row>
				<Col>
					<h1 className="home-name">NewBees</h1>
					<h2 className="home-descrip">Soemthing skdajf akdjf i falisj lfaksdj fakj fjasi</h2>				
				</Col>
				
				<Col>
					<img className="home-img" src="../../beePicnic.png" alt="beePicnic"></img>
				</Col>
			</Row>
		</Container>

		<Chatbot />
    </div>

  )
}

export default Home;
