import style from './plan.module.scss';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';


function Plan(props) {
  let planClass = classNames(style.plan, props.isSelected ? style.selected : "")
  return (
        <div className={planClass}>
            <h2 className={style.main_info} styleName={props.colorOne}>Безлимитный {props.price}</h2>
            <div className={style.main_info} styleName={props.colorTwo}>руб <span className={style.price}>{props.price}</span>/мес</div>
            <div className={style.plan__speed}>до {props.speed} Мбит/сек</div>
            <div className={style.plan__info}>{props.info}</div>
        </div>
  )
}

export default CSSModules(Plan, style)
