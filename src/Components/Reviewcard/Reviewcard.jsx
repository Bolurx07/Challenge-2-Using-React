import React from 'react'
import reviewStyle from "./Reviewcard.module.css"

const Reviewcard = ({img, subcontent, name}) => {
  return (
    <div className={reviewStyle.mycard}>
        <img className={reviewStyle.img} src={img} alt="pic-1"/>
        <div className={reviewStyle.aboutuscontent}>
            <p>{subcontent}</p>
            <span className={reviewStyle.span}>{name}</span>
        </div>
    </div>
  )
}

export default Reviewcard