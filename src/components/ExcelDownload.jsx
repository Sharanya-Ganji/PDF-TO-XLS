import React from 'react';
import Form from './Form';
import '../App.css';
import styled from 'styled-components';
import image1 from '../images/3rd screen.png';
import Image from './image.jsx';

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
    font-family: Roboto !important;
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

      @media (max-width: 300px) {
        width: 100%;
      }
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
    
    const handleClick = async () => {
        const filePath = process.env.PUBLIC_URL + '/dummy.xlsx'; 
        try {
            const response = await fetch(filePath);
            const fileData = await response.blob();
            const file = new File([fileData], 'dummy.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const fileUrl = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = 'dummy.xlsx';
            link.click();
            console.log("downloaded");
        }catch(err){
            console.log("There is an error");
        }
        
    };
    const serverImages = props.imageUrls.map((url) => (
        <Image url = {url.preSignedUrl} name = {url.imageName}/>
    ))
    return (
        
        <Container>
            <Para>Review Document</Para>
            <PdfImage>
            {
                props.imageUrls.length <= 0 ?
                <ViewImg1 src={image1} alt='pdf'></ViewImg1>:
                serverImages
             }
            <Form />
            </PdfImage>
            <Button onClick={handleClick}>Download AP Bookings</Button>
        </Container>
    );
}