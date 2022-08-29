import React from "react";
import image from "../images/macaron.png";
import * as icons from "react-bootstrap-icons"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import {Row,Col, Container} from 'react-bootstrap';

export default function()
{
    return( 
        <div className="logo-part">
                <Container className="logo-container">
        <Row className="justify-content-center">
        <Col sm={{span: 2, order: 'first'}} xs={{order: 'last'}} className="my-details-logo">

        </Col>
            <Col sm={{span: 4}} xs={{order: 'last'}} className="my-details-logo">
            <Container><h1>Ronchu</h1></Container>
            <Container><h2>Great food sdaslc;msakclmsklc </h2></Container>
            <Link to="/invite"><button type="button" class="btn btn-danger invite-btn">צור הזמנה</button></Link>
            
            <Row className="icons-row justify-content-center">
                <Col className="icons-col"><a href="https://www.facebook.com/izarmishli">
                <icons.Facebook  className="iconsClass" /></a></Col>
                <Col className="icons-col"><a href="https://github.com/IzharMishli">
                <icons.Github    className="iconsClass" /></a></Col>
                <Col className="icons-col"><a href="https://www.linkedin.com/in/izhar-mishli-594a9222b/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B5d1a725e-6854-4e09-952b-bcadbd83da73">
                <icons.Linkedin  className="iconsClass" /></a></Col>
                <Col className="icons-col"><a href="https://www.instagram.com/izhar_mishli/">
                <icons.Instagram className="iconsClass" /></a></Col>
            </Row>
            </Col>
            <Col sm={{span: 6, order: 'last'}} xs={{order: 'first'}} className="logo-img-div"><img className="logo-my-image" src={image} /></Col>
        </Row>
        </Container>
            
        </div>
    
        
    )
}