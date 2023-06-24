import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      // Perform file upload logic here (e.g., send file to server)
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2> 
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleFileSubmit}>Upload</button>
      <br></br>
      <button> Download Excel File</button>   
    </div>
  );
};

export default App;

