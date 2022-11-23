import style from './plan.module.scss';

export default function Plan(props) {
  return (
        <div className={style.plan}>
            <h2 className={style.plan__title}>Безлимитный {props.price}</h2>
            <div className={style.plan__price}>руб {props.price}/мес</div>
            <div className={style.plan__speed}>до {props.speed} Мбит/сек</div>
            <div className={style.plan__info}>Объем включенного трафика не ограничен</div>
        </div>
  )
}
