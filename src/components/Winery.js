import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'

export default function Winery({data}) {
    return (
        data.map(winery => {
            return(
                <Container key={winery.wineryid}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                            <div>{winery.wineryname}</div>
                            </Card.Title>
                            <Card.Text>
                                {winery.wineryaddress}
                            </Card.Text>
                        </Card.Body>
                        <div className="btn-group" role="group" aria-label="Options">
                        <Button type="button"className="btn-group-sm mx-1">Edit</Button>
                        <Button type="button"className="btn-group-sm mx-1">Event</Button>
                        <Button type="button"className="btn-group-sm mx-1">Wines Catalogue</Button>
                        </div>
                        
                    </Card>                    
                </Container>
            )
        })
    )
}
