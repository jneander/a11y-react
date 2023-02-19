import {ElementType, ReactNode} from 'react'

const style = {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
}

export interface VisuallyHiddenProps {
  as?: ElementType
  children: ReactNode
}

export function VisuallyHidden(props: VisuallyHiddenProps) {
  const {as: Component = 'span', children} = props

  return <Component style={style}>{children}</Component>
}
