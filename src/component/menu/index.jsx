import React from "react";
import { Link} from "react-router-dom"
import "./index.css"

function menu (){
    return(

        <div className="Lista">
            <li className="li">< Link to="/">Inicio</Link></li>
            <li ><Link to="/tabela">Pessoas</Link></li>

        </div>
    )


}

export default menu