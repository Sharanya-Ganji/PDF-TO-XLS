import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import image1 from '../images/2nd screen.png';
import image2 from '../images/view-img.png';
import Image from './image.jsx';

const Container=styled.div`
    align-items: center;
    text-align: left;
    margin: 50px 100px;
`;
const PdfImage=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Para=styled.p`
    display: flex;
    justify-content: center;
    font-weight:600;
    font-size: xx-large;
    color: rgb(55,103,134);
    font-family: Roboto !important ;
`;
const ViewImg1=styled.img`
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: solid 0.5px;
    margin-right: 100px;
    height:500px;

    @media (max-width: 768px) {
        width: 100%;
      }
`;
const ViewImg2=styled.img`
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: solid 0.5px;
    height:500px;
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
export default function View(props) {
    const navigator = useNavigate();
    function handleClick() {
      console.log('extract data');
        navigator('/exceldownload')
    };
    const serverImages = props.imageUrls.map((url) => (
        <Image url = {url.preSignedUrl} name = {url.imageName}/>
    ))
    return (
        
        <Container>
        <Para>Process Document</Para>
            {props.imageUrls.length <= 0 ? <PdfImage>
               <ViewImg1 src={image1} alt='pdf'></ViewImg1>
               <ViewImg2 src={image2} alt='pdf'></ViewImg2>
            </PdfImage> :
            serverImages}
            <Button  onClick={handleClick}>Extract Data</Button>
        </Container>
    );
}