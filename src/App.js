import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DragAndDrop from './components/DragAndDrop.jsx';
import View from './components/View.jsx';
import ExcelDownoad from './components/ExcelDownload.jsx';
import 'typeface-roboto';


function App() {
  const [imageUrls, setImageUrls] = React.useState([]);
  return (
    <div className="App" style={{ fontFamily: 'Roboto' }}>
       <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<DragAndDrop setImageUrls = {setImageUrls}/>} />
          <Route path="/view" element={<View imageUrls = {imageUrls}/>} />
          <Route path="/exceldownload" element={<ExcelDownoad imageUrls = {imageUrls}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;