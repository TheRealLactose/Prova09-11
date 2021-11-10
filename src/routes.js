import React from "react";
import Formulario from "./pages/formulario/index";
import Manipulacao from "./pages/manipulacao/index";
import Editar from "./pages/edit/index";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";

function Rotas(){

    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Formulario/>} />
                <Route path="/tabela" exact element={<Manipulacao/>} />
                <Route path="/edit/:id" exact element={<Editar/>} />
            </Routes>
        </Router>
    )

}
export default Rotas;