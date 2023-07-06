import React from 'react';
import '../App.css';
import styled from 'styled-components';
import Radio from './Radio';
import {Checkbox1, Checkbox2} from './checkbox';


const FormData=styled.div`
border-radius: 10px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
border: solid 0.5px;
display: flex;
flex-direction: column;
font-size: small;
height: 500px;
width: 40%;
padding: 20px;
line-height: 20px;
color: black;
`;

const FormInp=styled.input`
  padding: 8px;
  width: 250px;
  border:0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  outline: none;
  &:hover {
    border-color: rgba(0, 0, 0, 0.87);
    box-sizing: border-box;
    transition: color 0.2s ease;  
  }

  @media (max-width: 1000px) {
    width: 150px;
  }
`;


const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted!');
  };

  return (
    <FormData>
    <form  onSubmit={handleSubmit}>
        <Radio/>
      <label>
        <table>
            <td>Full Name:</td>
            <td><Checkbox1/></td>
        </table>
        <FormInp type="text"  />
      </label>
      <br />
      <Checkbox2/>
      <br/><br/>
      <Radio/>
      <label>
        <table>
            <td>Phone number:</td>
            <td><Checkbox1/></td>
        </table>
        <FormInp
          type="text"
        />
      </label> 
      <br />
      <Checkbox2/>
      <br/><br/>

      <Radio/>
      <label>
        <table>
            <td>Home address:</td>
            <td><Checkbox1/></td>
        </table>
        <FormInp
          type="text"
        />
      </label>
      <br />
      <Checkbox2/>
      <br/><br/>
      <Radio/>
      <label>
      <table>
            <td>Email:</td>
            <td><Checkbox1/></td>
        </table>
        <FormInp
          type="email"
        />
      </label><br/>
      <Checkbox2/>
      
    </form>
    </FormData>
  );
};

export default Form;