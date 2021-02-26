import { render } from '@testing-library/react'

import { Button } from './Button'

describe('<Button />', () => {
  it('deve renderizar a header', () => {
    const { container } = render(<Button label="ButtonTest" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
