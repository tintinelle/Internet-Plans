import { useState } from 'react';
import style from './plan.module.scss';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';


function Plan(props) {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected (!selected);
  }

  // let planClass = classNames(style.plan, props.isSelected ? style.selected : "")
  return (
        <div onClick = {handleChange} className={classNames(style.plan, selected ? style.selected : "")}>
          <h2 className={style.details} styleName={props.colorOne}>Безлимитный {props.price}</h2>
          <div className={style.details} styleName={props.colorTwo}>руб <span className={style.price}>{props.price}</span>/мес</div>
          <div className={style.speed}>до {props.speed} Мбит/сек</div>
          <div className={style.info}>{props.info}</div>
        </div>
  )
}

export default CSSModules(Plan, style)

