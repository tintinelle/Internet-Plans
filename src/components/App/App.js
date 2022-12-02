import { useState } from 'react';
import style from './app.module.scss';
import Plan from '../Plan/Plan.jsx';
import data from '../../data/data.json';


function App() {
  const [counter, setCounter] = useState();

  return (
    <div className={style.app}>
    {
      data.map((plan) =>
      <Plan
      key = {plan.id}
      id = {plan.id}
      colorOne = {plan.colorOne} 
      colorTwo ={ plan.colorTwo} 
      price = {plan.price} 
      speed = {plan.speed}
      info = {plan.info}
      isSelected = {plan.id === counter}
      counter = {counter}
      setCounter = {setCounter}
      />  
      )
    }
    </div>
  );
}

export default App;
