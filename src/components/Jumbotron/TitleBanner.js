import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap';
import './style.css'



export default function TitleBanner() {

    return (
        <Jumbotron fluid className="banner">
            <Container>
                <h1>Cheers Event</h1>
                <h3>Wine Events and Local Vineyards</h3>
            </Container>
        </Jumbotron>
    )
}
