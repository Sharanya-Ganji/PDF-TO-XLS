import React, { useState } from 'react';
import '../App.css';
import Radio from './Radio';
import CheckBox1 from './Checkbox1';
import CheckBox2 from './Checkbox2';


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form validation or data handling here
    console.log('Submitted!', name, email);
  };

  return (
    <form className='form-data' onSubmit={handleSubmit}>
        <Radio/>
      <label>
        <table>
            <td>Full Name:</td>
            <td><CheckBox1/></td>
        </table>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label> <CheckBox2/>
      <br />
      <Radio/>
      <label>
        <table>
            <td>Phone number:</td>
            <td><CheckBox1/></td>
        </table>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label> <CheckBox2/>
      <br />
      <Radio/>
      <label>
        <table>
            <td>Home address:</td>
            <td><CheckBox1/></td>
        </table>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label> <CheckBox2/>
      <br />
      <Radio/>
      <label>
      <table>
            <td>Email:</td>
            <td><CheckBox1/></td>
        </table>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <CheckBox2/>
    </form>
  );
};

export default Form;
