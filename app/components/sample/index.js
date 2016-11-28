import React from 'react'
import style from './style'
import Config from 'Config'

export default () => {
  return(
    <ul className={style.styletest}>
      <li>first element</li>
      <li>second element</li>
      <li>{Config.thirdElementName}</li>
    </ul>
  )
}