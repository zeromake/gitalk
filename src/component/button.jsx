import React from 'react'

export default function Button (props) {
  let className = 'gt-btn '
  props.className && (className+=props.className)
  return (
    <button className={className} onClick={props.onClick}>
      <span className="gt-btn-text">{props.text}</span>
      {props.isLoading && <span className="gt-btn-loading gt-spinner"></span>}
    </button>
  )
}
