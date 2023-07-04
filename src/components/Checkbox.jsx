// import React, { useState } from 'react';

// const Checkbox1 = () => {
//   const [agree, setAgree] = useState(false);

//   const handleAgreeChange = (event) => {
//     setAgree(event.target.checked);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform any necessary form validation or data handling here
//     console.log('Submitted!', agree);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input
//           type="checkbox"
//           checked={agree}
//           onChange={handleAgreeChange}
//         />
//         Key is not found
//       </label>
//     </form>
//   );
// };

// export default Checkbox1;


import React, { useState } from 'react';

function Checkbox({ label, isChecked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {label}
    </label>
  );
}

export function Checkbox1() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      label="Key is not found"
      isChecked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
}

export function Checkbox2() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      label="Value is blank"
      isChecked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
  }


