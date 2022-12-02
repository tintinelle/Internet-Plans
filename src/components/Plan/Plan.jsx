import style from './plan.module.scss';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';


function Plan({id, colorOne, colorTwo, price, speed, info, isSelected, setCounter}) {
  let planClass = classNames(style.plan, isSelected ? style.selected : "")

  const getId = () => {
    if (isSelected) {
      return setCounter()
    }
    return setCounter(id)
  }

  return (
        <div onClick = {getId} className={planClass}>
          <h2 className={style.details} styleName={colorOne}>Безлимитный {price}</h2>
          <div className={style.details} styleName={colorTwo}>руб <span className={style.price}>{price}</span>/мес</div>
          <div className={style.speed}>до {speed} Мбит/сек</div>
          <div className={style.info}>{info}</div>
        </div>
  )
}

export default CSSModules(Plan, style)