
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './companents/Home';
import './App.scss';

function App() {
  const [saveArr, setSaveArr] = useState([])

  return (
    <>
      <div className="container">
        <Home
          saveArr={saveArr}
          setSaveArr={setSaveArr}
        />
        {/* <Routes>
          <Route path='/' element={<Home
            saveArr={saveArr}
            setSaveArr={setSaveArr}
          />}
          />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
