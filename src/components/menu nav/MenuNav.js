import React from 'react'
import { Col, Row } from 'react-bootstrap'


const MenuNav = ({ filterBycategory, allTheCategory }) => {

    // the function to crate the button  depending on the category on the data 
    const filterFunction = (cat) => {
        filterBycategory(cat)
    }

    return (
        <Row className='mb-5'>
            <Col>
                <div className='d-flex flex-column  align-items-center mt-4'>
                    <h1> Main Menu </h1>
                    <hr style={{ width: "20%", border: "2px solid #DC3545", borderRadius: "10px", marginBottom: "26px" }}></hr>
                    <div className='main-mune d-flex'>
                        {
                            allTheCategory.map((el) => {
                                return (

                                    <button onClick={() => filterFunction(el)} className='button-m '> {el}</button>

                                )
                            })
                        }


                    </div>

                </div>
            </Col>
        </Row>
    )
}



export default MenuNav