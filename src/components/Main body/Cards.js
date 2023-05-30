import React from 'react'
import { Alert, Card, Col, Row } from 'react-bootstrap'

const Cards = ({ dishes }) => {
    return (
        <>

            {
                dishes.length ? (
                    dishes.map((el) => {
                        return (
                            <Row key={el.id} className='mt-4'>
                                <Col>
                                    <Card className='flex-row card' style={{ backgroundColor: 'transparent' }}>
                                        <Card.Img className='card-img' variant="top" src={el.img} />
                                        <Card.Body>
                                            <div className='d-flex justify-content-between'>
                                                <Card.Title className='dish-title'>{el.title}</Card.Title>
                                                <span className='dish-price'>{el.price}</span>
                                            </div>
                                            <Card.Text >
                                                {el.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    })
                ) : <Alert className='text-center' variant='danger'>
                    We are sorry ! No dishes today
                </Alert>
            }

        </>
    )
}


export default Cards