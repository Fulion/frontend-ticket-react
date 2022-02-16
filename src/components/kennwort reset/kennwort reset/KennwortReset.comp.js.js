import React from 'react'
import {Container, Row, Col, Form , Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

export const ResetKennwort = ({handleOnChange,handleOnResetSubmit,
    formSwittcher, email}) => {
    return (
        <Container>
            <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Kennwort</h1>
            < br />
            <Form autoComplete="off" 
            onSubmit = 
            {handleOnResetSubmit}>
            <Form.Group>
                <Form.Label>E-Mail Adresse</Form.Label>
                <Form.Control 
                type= "email"  
                name="email"
                value= {email}
                onChange= {handleOnChange}
                placeholder="Enter Email"
                required
               
                />
                </Form.Group>
                

                <Button type="submit"> Reset Kennwort </Button>                
            
            </Form>
            < br />
            </Col>
            </Row >

            <Row>
            <Col>
            <a href="#!" onClick={()=> formSwittcher('login')}> jetzt einloggen</a>
            </Col>
            </Row>
        </Container>
        
    )
}

ResetKennwort.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwittcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
    
}
