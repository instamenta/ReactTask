import { render, screen, fireEvent } from '@testing-library/react'
import { Catalog } from '../src/components/Catalog/Catalog'

describe('Catalog', () => {
  test('renders all users by default', () => {
    render(<Catalog />)
    const cardContainers = screen.getAllByTestId('card-container')
    expect(cardContainers.length).toBe(4) // Assuming there are 4 users in userDataArray
  })

  test('filters users based on search string', () => {
    const props = 'John'
    render(<Catalog props={props} />)
    const cardContainers = screen.getAllByTestId('card-container')
    expect(cardContainers.length).toBe(1)
    const fullname = screen.getByText(/John Doe/)
    expect(fullname).toBeInTheDocument()
  })
})