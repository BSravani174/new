import { render,screen } from "@testing-library/react"
import Content from './Content'
test('main content test case',()=>{
    render(<Content/>)
    const paraElement=screen.getByText(/hello.*is the main content of the body/i)
    expect(paraElement).toBeInTheDocument()
})