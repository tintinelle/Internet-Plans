import style from './app.module.scss';
import Plan from '../Plan/Plan.jsx';
import data from '../../data/data.json';


function App() {
  return (
    <div className={style.app}>
      <div className={style.plans}>
    {
      data.map((plan) =>
      <Plan
      key={plan.id}
      colorOne={plan.colorOne} 
      colorTwo={plan.colorTwo} 
      price={plan.price} 
      speed={plan.speed}
      info={plan.info}
      // isSelected={plan.isSelected}
      >  
      </Plan>
      )
    }
      </div>
    </div>
  );
}

export default App;
