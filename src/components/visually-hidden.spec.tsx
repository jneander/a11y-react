import {createContainer} from '@jneander/spec-utils-dom'
import {render, screen} from '@testing-library/react'

import {VisuallyHidden} from './visually-hidden'

describe('components > VisuallyHidden', () => {
  let $container: HTMLElement

  beforeEach(() => {
    $container = createContainer()
  })

  afterEach(() => {
    $container.remove()
  })

  it('displays the given content', () => {
    render(<VisuallyHidden>Content</VisuallyHidden>, {container: $container})
    expect(screen.getByText('Content')).to.exist
  })

  describe('`as` prop', () => {
    it('is used to render the underlying element', () => {
      render(<VisuallyHidden as="div">Content</VisuallyHidden>, {container: $container})
      expect(screen.getByText('Content').tagName).to.equal('DIV')
    })

    it('defaults to "span"', () => {
      render(<VisuallyHidden>Content</VisuallyHidden>, {container: $container})
      expect(screen.getByText('Content').tagName).to.equal('SPAN')
    })
  })
})
