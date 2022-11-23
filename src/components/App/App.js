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
      price={plan.price} 
      speed={plan.speed}>
      </Plan>
      )
    }
      </div>
    </div>
  );
}

export default App;
