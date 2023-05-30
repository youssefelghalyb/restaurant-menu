import React, { useState } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const Header = ({ filterBySearch }) => {

    const [search, setSearch] = useState('');

    const searchFunc = () => {
        filterBySearch(search);
        setSearch('')
    }

    return (
        <Row>
            <Col>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container >
                        <Navbar.Brand href="#" className='brand-color'>MENU</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                />
                                <Button onClick={() => searchFunc()} variant="outline-danger">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row>

    )
}
export default Header