import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const Container=styled.div`
  align-items: center;
  text-align: left;
  margin: 50px 100px;
  height:100vh;
`;

const Para=styled.p`
  font-weight:600;
    font-size: xx-large;
    color: rgb(55,103,134);
    font-family: "Roboto";
`;

const FormFileUpload=styled.form`
  height: 200px;
  width: auto;
  max-width: 100%;
  text-align: center;
`;
const InputFileUpload=styled.input`
  display: none;
`;

const LabelFileUpload=styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-radius: 1rem;
  border-style: dashed;
  border-color: rgb(55,103,134);
`;

const Paragraph=styled.p`
  font-size:medium;
  font-weight:600;
    color: rgb(55,103,134);
    font-family: "Roboto";
`;

const UploadButton = styled.button`
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  color: rgb(55, 103, 134);
  &:hover{
    text-decoration-line: underline;
  }
`;

const DragFileElement=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const DragActive=styled(LabelFileUpload)`
  background-color: #ffffff;
`;
export default function DragDropFile(props) {
  const [dragActive, setDragActive] = React.useState(false);

  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  async function getData(file) {
    const formData = new FormData();
    formData.append('file', file)
    formData.append('filename', file.name)
    const url =  'https://dev-api.vivelogis.com/v1/mdm/extract-image-from-pdf';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjExZjBiZTE4NWNkZWMyYTQ0YTI3NzU3IiwidGltZXN0YW1wIjoxNjg4NjQ2ODA3LjU1NzAwMiwiZXhwIjoxNjg4NjU0MDA3fQ.0ul6tt6CVieNVb431xpNvCKGA0i6TB6W4Dcg6ducFWk'
    await axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
      .then((response) => {
        const preSignedUrls = response.data.preSignedUrls;
        console.log("Response", response.data.preSignedUrls[0].preSignedUrl);
        preSignedUrls.map((url) => (props.setImageUrls(prev => ([...prev, url]))))
        
      })
      .catch((e) => {
        console.log("Error: ", e);
      }); 
  }

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
      getData(e.dataTransfer.files[0]);
      console.log('file uploaded drop', e.dataTransfer.files[0].name);
    }
    navigate('/view')
  };
  
   function handleChange(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      getData(e.target.files[0]);
      console.log('file uploaded change', e.target.files[0].name)
    }
    navigate('/view')
  };
  
 function onButtonClick() {
    inputRef.current.click();
  };

  return (
    <Container>
    <Para>Upload Document</Para>
    <FormFileUpload onDragEnter={(e)=>handleDrag(e)} onSubmit={(e) => e.preventDefault()}>
      <InputFileUpload ref={inputRef} type="file" multiple={true} onChange={(e)=>handleChange(e)} />
      <LabelFileUpload htmlFor="InputFileUpload" className={dragActive ? DragActive : undefined} >
        <div>
          <Paragraph>Drag and drop your file here or</Paragraph>
          <UploadButton onClick={onButtonClick}>Upload a file</UploadButton>
        </div> 
      </LabelFileUpload>
      {dragActive && <DragFileElement onDragEnter={(e)=>handleDrag(e)} onDragLeave={(e)=>handleDrag(e)} onDragOver={(e)=>handleDrag(e)} onDrop={(e)=>handleDrop(e)}></DragFileElement>}
      </FormFileUpload>
      {/* <img src={imageUrl} alt="server"></img> */}
      </Container>
  );
};