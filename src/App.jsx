
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './companents/Home';
import Setting from './companents/Setting';
import Object from './Object';
import './App.scss';
import NodFaund from './companents/NodFaund';
import Navbar from './companents/Navbar/Navbar';

function App() {
  const [saveArr, setSaveArr] = useState([])
  const [foodArr, setFoodArr] = useState([])
  const [addFoodArr, setaddFoodArr] = useState([...Object])

  useEffect(() => {
    setFoodArr(Object.filter(obj => obj.foodType === 'hot-dishes'))
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={
            <Home
              foodArr={foodArr}
              setFoodArr={setFoodArr}
              saveArr={saveArr}
              setSaveArr={setSaveArr}
              addFoodArr={addFoodArr}
              setaddFoodArr={setaddFoodArr}
            />} />
          <Route path='/home' element={
            <Home
              foodArr={foodArr}
              setFoodArr={setFoodArr}
              saveArr={saveArr}
              setSaveArr={setSaveArr}
              addFoodArr={addFoodArr}
              setaddFoodArr={setaddFoodArr}
            />} />
          <Route path='/setting' element={
            <Setting
              foodArr={foodArr}
              setFoodArr={setFoodArr}
              saveArr={saveArr}
              setSaveArr={setSaveArr}
              addFoodArr={addFoodArr}
              setaddFoodArr={setaddFoodArr}
            />} />
          <Route path='/nodfaund' element={
            <NodFaund
              foodArr={foodArr}
              setFoodArr={setFoodArr}
              saveArr={saveArr}
              setSaveArr={setSaveArr}
              addFoodArr={addFoodArr}
              setaddFoodArr={setaddFoodArr}
            />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
