import React from 'react'
import './home.css'
import Navigation from '../Navigation/Navigation'
import {Row, Col, Container, Button, Card} from 'react-bootstrap'

import Feed from "../Feed/feed.js"


function Home() {
  return (
    <div id="home-page">
		<Container fluid>
			<Row className="home">
				<Col>
					<div className="left">
						<div className="home-left" >
							<h1 className="home-name">NewBees</h1>
							<h2 className="home-descrip">We're the only ones who make honey, pollinate flowers, and dress like this!</h2>				
							
						</div>

						<Button href="/feed" className="home-button">Get Started</Button>
					</div>
				</Col>
				
				<Col>
					<img className="home-img" src="../../beePicnic.png" alt="beePicnic"></img>
				</Col>
			</Row>
		</Container>

		
    </div>

  )
}

export default Home;
