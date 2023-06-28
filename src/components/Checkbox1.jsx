import React, { useState } from 'react';

const Checkbox1 = () => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form validation or data handling here
    console.log('Submitted!', agree);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={handleAgreeChange}
        />
        Key is not found
      </label>
    </form>
  );
};

export default Checkbox1;
