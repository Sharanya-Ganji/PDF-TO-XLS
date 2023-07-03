import React, { useState } from 'react';

const Radio = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted!', value);
  };

  return (
    <form onSubmit={handleSubmit}>
        Key-value pair
      <label>
        <input
          type="radio"
          value="Yes"
          checked={value === 'Yes'}
          onChange={handleChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="No"
          checked={value === 'No'}
          onChange={handleChange}
        />
        No
      </label>
      <br />
    </form>
  );
};

export default Radio;
