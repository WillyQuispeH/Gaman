import React from 'react'
import styles from "./CardImg.module.scss"

interface ICardImg{
    img:string
    title:string
    price:string
    text:string
}
const CardImg = ({img, title, price, text}:ICardImg) => {
  return (
    <div  className={styles.cardImg}>
    <img src={img} alt={title} />
    <article>
      <h2>{title}</h2>
      <span>
        Desde:
        <h5>{price}</h5>
      </span>
      <h3>{text}</h3>
    </article></div>
  )
}

export default CardImg