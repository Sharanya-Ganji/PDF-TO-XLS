import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import image1 from './2nd screen.png';
import image2 from './view-img.png'

const Container=styled.div`
    align-items: center;
    text-align: left;
    margin: 50px 100px;
    color: #990011;
`;
const PdfImage=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Para=styled.p`
    display: flex;
    justify-content: center;
    font-weight:600;
    font-size: xx-large;
    color: rgb(55,103,134);
    font-family: "Roboto";
`;
const ViewImg1=styled.img`
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: solid 0.5px;
    margin-right: 100px;
    height:450px;
`;
const ViewImg2=styled.img`
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: solid 0.5px;
    height:450px;
`;

const Button=styled.button`
    margin: auto;
    display: block;
    font-size: medium;
    margin-top: 50px;
    background-color: rgb(55,103,134);
    border-radius: 10px;
    cursor: pointer;
    color: white;
    &:hover {
        background-color: white;
        color: rgb(55,103,134);
    }
`;
export default function View() {
    const navigator = useNavigate();
    function handleClick() {
      console.log('extract data');
        navigator('/exceldownload')
    };
    return (
        
        <Container>
        <Para>Process Document</Para>
            <PdfImage>
               <ViewImg1 src={image1} alt='pdf'></ViewImg1>
               <ViewImg2 src={image2} alt='pdf'></ViewImg2>
               
            </PdfImage>
            <Button  onClick={handleClick}>Extract Data</Button>
        </Container>
    );
}