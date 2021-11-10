import React from "react";
import "./index.css";

function formulario (){

    return(
        <div className="formulario">
            <form method="post">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome"  className="nome" />
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" className="email" />
                </div>
                <div>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" class="input-padrao" required placeholder="(xx) xxxxx-xxxx"/>
                </div>
            </form>
        </div>
    )

    
}

export default formulario

