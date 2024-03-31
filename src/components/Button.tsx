"use client"
import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = () => {
    const classes = ` relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1`
  const renderButton = () => (
    <button className={classes} >
        {ButtonSvg("white")}
    </button>
  )

  return renderButton();
}

export default Button
