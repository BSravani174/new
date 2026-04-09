import { render,screen } from "@testing-library/react"
import Header from "./Header"

test('header testing',()=>{
render(<Header/>)
const linkElement=screen.getByText(/home/i);
expect(linkElement).toBeInTheDocument()
})