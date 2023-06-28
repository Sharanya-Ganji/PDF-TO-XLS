import React from "react";
import { useNavigate } from "react-router-dom";

export default function DragDropFile() {

  const [dragActive, setDragActive] = React.useState(false);

  const inputRef = React.useRef(null);
  const navigate = useNavigate();

   function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log('file uploaded drop', e.dataTransfer.files[0].name);
      
    }
    navigate('/view', {state: {name : e.dataTransfer.files[0].name}})
  };
  
   function handleChange(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log('file uploaded change', e.target.files[0].name)
    }
    navigate('/view', {state: {name : e.target.files[0].name}})
  };
  
 function onButtonClick() {
    inputRef.current.click();
  };

  return (
    <div className="container">
    <p>Upload File</p>
    <form id="form-file-upload" onDragEnter={(e)=>handleDrag(e)} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={(e)=>handleChange(e)} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div> 
      </label>
      {dragActive && <div id="drag-file-element" onDragEnter={(e)=>handleDrag(e)} onDragLeave={(e)=>handleDrag(e)} onDragOver={(e)=>handleDrag(e)} onDrop={(e)=>handleDrop(e)}></div>}
      </form>
    </div>
  );
};