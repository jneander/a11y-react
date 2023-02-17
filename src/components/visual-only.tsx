// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {elementType} from 'prop-types'
import React from 'react'

export function VisualOnly(props) {
  const {as: Component, ...otherProps} = props

  return <Component {...otherProps} aria-hidden={true} />
}

VisualOnly.propTypes = {
  as: elementType,
}

VisualOnly.defaultProps = {
  as: 'span',
}
