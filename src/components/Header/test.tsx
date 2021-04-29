import { screen, render } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('It should render the heading', () => {
    const { container } = render(<Header />)

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('It should render color correctly', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
