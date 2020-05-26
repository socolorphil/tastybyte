import React, { Component } from 'react';
import { Jumbotron, Container, Button, Col, Image, Row } from 'react-bootstrap';
import Logo from './tastybytelogo.png';

class Home extends Component {
	render() {
		return (
			<Container>
				<Jumbotron Classname="jumbotron1">
					<p>Currently Under Construction!</p>
					{/*<h1 className="home-title">Welcome to TastyByte!</h1>*/}
					<Row
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							marginBottom: '5%',
							marginLeft: '0%',
							marginRight: '0%'
						}}
					>
						<Col xs={10} md={5}>
							<Image src={Logo} alt="Tasty Byte Logo" roundedCircle />
						</Col>
					</Row>
					<div className="create-act-btn">
						<Button variant="primary" size="lg" href="/createaccount">
							Create Account
						</Button>
					</div>
					<div className="login-btn">
						<Button variant="primary" size="lg" href="/formlogin">
							Login
						</Button>
					</div>
				</Jumbotron>
			</Container>
		);
	}
}

export default Home;
