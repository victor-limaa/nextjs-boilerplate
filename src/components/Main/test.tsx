import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('It should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('It should render color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
