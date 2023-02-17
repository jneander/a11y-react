import type {ElementType, ReactNode} from 'react'

export interface VisualOnlyProps {
  as: ElementType
  children: ReactNode
}

export function VisualOnly(props: VisualOnlyProps) {
  const {as: Component = 'span'} = props

  return <Component aria-hidden={true} />
}
