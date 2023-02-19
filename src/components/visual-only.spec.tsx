import {createContainer} from '@jneander/spec-utils-dom'
import {render, screen} from '@testing-library/react'

import {VisualOnly} from './visual-only'

describe('components > VisualOnly', () => {
  let $container: HTMLElement

  beforeEach(() => {
    $container = createContainer()
  })

  afterEach(() => {
    $container.remove()
  })

  it('displays the given content', () => {
    render(<VisualOnly>Content</VisualOnly>, {container: $container})
    expect(screen.getByText('Content')).to.exist
  })

  describe('`as` prop', () => {
    it('is used to render the underlying element', () => {
      render(<VisualOnly as="div">Content</VisualOnly>, {container: $container})
      expect(screen.getByText('Content').tagName).to.equal('DIV')
    })

    it('defaults to "span"', () => {
      render(<VisualOnly>Content</VisualOnly>, {container: $container})
      expect(screen.getByText('Content').tagName).to.equal('SPAN')
    })
  })
})
