import { render,screen } from "@testing-library/react"
import App from "./App"
//test case for checking link appearing
test('link testing',()=>{
    render(<App/>)
    const linkElement= screen.getByText(/link/i)
    expect(linkElement).toBeInTheDocument()
})