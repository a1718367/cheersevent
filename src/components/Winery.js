import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'

export default function Winery({data}) {
    return (
        data.map(winery => {
            return(
                <Container key={winery.wineryid}>
                    <Card>
                        <Card.Body>
                            <div>{winery.wineryname}</div>
                        </Card.Body>
                    </Card>
                    <Button className="w-25">Edit</Button>
                </Container>
            )
        })
    )
}
