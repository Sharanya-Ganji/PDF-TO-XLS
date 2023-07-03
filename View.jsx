import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../App.css';

import image1 from './2nd screen.png';
import image2 from './view-img.png'

export default function View() {
    const navigator = useNavigate();
    function handleClick() {
      console.log('extract data');
        navigator('/exceldownload')
    };
    return (
        
        <div className='container'>
        <p style={{display:"flex", justifyContent:"center"}}>Process Document</p>
            <div className='pdf-image'
            style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
      >
               <img src={image1} className="view-img" alt='pdf' style={{ marginRight: '100px', height:'450px' }}></img><br></br>
               <img src={image2} className="view-img" alt='pdf' style={{height:'450px'}}></img>

            </div>
            <button className='btn' onClick={handleClick}>Extract Data</button>
        </div>
    );
}