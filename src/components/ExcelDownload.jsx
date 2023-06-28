import React from 'react';
// import {  useNavigate } from 'react-router-dom';
import Form from './form';
import '../App.css';

import image1 from './3rd screen.png';
//import image2 from './download-img.png'


export default function View() {
    
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
    return (
        
        <div className='container'>
            <div className='pdf-image'
            style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
            <img src={image1} alt='pdf' style={{ marginRight: '100px', height:'450px', width:'60%' }}></img>
            <Form />
            </div>
            <button className='btn' onClick={handleClick}>Download AP Bookings</button>
        </div>
    );
}