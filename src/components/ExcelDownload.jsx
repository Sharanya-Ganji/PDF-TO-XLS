import React from 'react';
import {  useNavigate } from 'react-router-dom';

import '../App.css';

import image1 from './3rd screen.png';
import image2 from './download-img.png'


export default function View() {
    const navigator = useNavigate();
    function handleClick() {
      console.log('download ap bookings');
      navigator('/displayExcel');

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
            <img src={image1} alt='pdf' style={{ marginRight: '100px' }}></img>
            <img src={image2} alt='pdf'></img>
            </div>
            <button className='btn' onClick={handleClick}>Download AP Bookings</button>
        </div>
    );
}