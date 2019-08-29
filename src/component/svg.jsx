import React from 'react'

export default ({ className, text, name }) => {
  const { default: svg } = require(`!!raw-loader!../assets/icon/${name}.svg`);
  return (
    <span className={`gt-ico ${className}`}>
      <span className="gt-svg" dangerouslySetInnerHTML={{
        __html: svg,
      }}/>
      {
        text && <span className="gt-ico-text">{text}</span>
      }
    </span>
  )
}
