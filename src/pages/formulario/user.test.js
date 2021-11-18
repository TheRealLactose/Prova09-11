import {render, screen, fireEvent} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Formulario from './index'
import axios from 'axios'




// const mockUser = {

//     name:'Eduardo',
//     email: 'du-eduardo10@hotmail.com',
//     telephone: '45984152806'

// }

const MockFormulario = () => {
    return (
        <BrowserRouter>
        <Formulario/>
        </BrowserRouter>
    )

    }

test('testando formulario', async () => {
    axios.post.mockImplementation(()=> Promise.resolve(mockUser))

    render(<MockFormulario/>)
    const nameElement = await screen.findByTestId(/nome/i)
    const emailElement = await screen.findByTestId(/email/i)
    const telefoneElement = await screen.findByTestId(/telefone/i)
    const buttonElement = await screen.findByRole('button')

    // fireEvent.change(emailElement,{target:{value:'du-eduardo10@hotmail.com'}})
    // fireEvent.change(telefoneElement,{target:{value:'984152806'}})
    // fireEvent.change(nameElement,{target:{value:'Eduardo'}})
    // fireEvent.click(buttonElement)
    screen.debug()
    expect(nameElement).toBeInTheDocument()
    // expect(axios.post).toHaveBeenCalled()
})