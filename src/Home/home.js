import React from 'react'
import './home.css'
import Navigation from '../Navigation/Navigation'
import {Row, Col, Container, Button} from 'react-bootstrap'

import Feed from "../Feed/feed.js"


function Home() {
  return (
    <div id="home-page">
		<Container fluid>
			<Row className="home">
				<Col>
					<div className="home-left" >
					<h1 className="home-name">NewBees</h1>
					<h2 className="home-descrip">Soemthing skdajf akdjf i falisj lfaksdj fakj fjasi Soemthing skdajf akdjf i falisj lfaksdj fakj fjasi</h2>				
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
