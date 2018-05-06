import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { value, redirect, url } = props
  return (
    <button
      onClick={() => redirect(url)}
      className={`${value}-button`}
    >
      { value }
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
}

export default Button
