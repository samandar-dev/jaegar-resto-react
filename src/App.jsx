
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './companents/Home';
import Setting from './companents/Setting';
import Object from './Object';
import './App.scss';

function App() {
  const [saveArr, setSaveArr] = useState([])
  const [foodArr, setFoodArr] = useState([])

  useEffect(() => {
    setFoodArr(Object.filter(obj => obj.foodType === 'hot-dishes'))
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home
            foodArr={foodArr}
            setFoodArr={setFoodArr}
            saveArr={saveArr}
            setSaveArr={setSaveArr}
          />} />
        <Route path='/home' element={
          <Home
            foodArr={foodArr}
            setFoodArr={setFoodArr}
            saveArr={saveArr}
            setSaveArr={setSaveArr}
          />} />
        <Route path='/setting' element={
          <Setting
            foodArr={foodArr}
            setFoodArr={setFoodArr}
            saveArr={saveArr}
            setSaveArr={setSaveArr}
          />} />
      </Routes>
    </>
  );
}

export default App;
