
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


