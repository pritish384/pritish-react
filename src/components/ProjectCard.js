import { Col } from "react-bootstrap";
import React from 'react';


export const ProjectCard = ({ title, description, imgUrl ,projLink}) => {
  return (
    <Col size={12} sm={6} md={4}>
  <a href={projLink}  style={{ color: '#FFF' }} target="_blank" rel="noopener noreferrer" >   <div className="proj-imgbx">
      <img src={imgUrl} alt="img"/>
        <div className="proj-txtx">
           <h4 >{title}</h4>
          <span>{description}</span>
        </div>
      </div></a>
    </Col>
  )
}
