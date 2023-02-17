// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {elementType} from 'prop-types'
import React from 'react'

const style = {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
}

export function VisuallyHidden(props) {
  const {as: Component, ...otherProps} = props

  return <Component {...otherProps} style={style} />
}

VisuallyHidden.propTypes = {
  as: elementType,
}

VisuallyHidden.defaultProps = {
  as: 'span',
}
