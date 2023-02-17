import {MutableRefObject, useEffect} from 'react'

import {findTabbable} from '@jneander/a11y-dom'

export interface UseFocusScopeOptions {
  containerRef: MutableRefObject<HTMLElement>
  defaultFocusRef: MutableRefObject<HTMLElement>
}

export function useFocusScope(options: UseFocusScopeOptions) {
  const {containerRef, defaultFocusRef} = options

  useEffect(() => {
    if (defaultFocusRef.current) {
      defaultFocusRef.current.focus()
    }
  }, [defaultFocusRef])

  useEffect(() => {
    const $container = containerRef.current

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode !== 9) {
        return
      }

      const $tabbableEls = findTabbable($container)
      const $first = $tabbableEls[0]
      const $last = $tabbableEls[$tabbableEls.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === $first) {
          $last.focus()
          event.preventDefault()
        }
      } else if (document.activeElement === $last) {
        $first.focus()
        event.preventDefault()
      }
    }

    $container.addEventListener('keydown', handleKeyDown, false)

    return () => {
      $container.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [containerRef])
}
