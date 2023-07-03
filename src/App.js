import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DragAndDrop from './components/DragAndDrop.jsx';
import View from './components/View.jsx';
import ExcelDownoad from './components/ExcelDownload.jsx';
import 'typeface-roboto';


function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto' }}>
       <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<DragAndDrop />} />
          <Route path="/view" element={<View />} />
          <Route path="/exceldownload" element={<ExcelDownoad />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
