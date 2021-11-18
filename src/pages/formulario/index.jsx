import * as React from "react";
import "./index.css";
import Menu from "../../component/menu/index"
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {useForm} from "react-hook-form"


function Formulario (){

    const {register, handleSubmit} = useForm()
    
     const addPost = async data => axios.post("http://localhost:8080/user", data)
    .then(() => {
        alert("Enviado")
    })
    .catch(()=>{
        alert("Email ou Telefone ja existente!")
    })

    return(
        <div className="formulario">
            <form onSubmit={handleSubmit(addPost)}>
                <div>
                    <Menu/>
                </div>
                <div>
                    <TextField id="standard-basic" inputProps={{'data-testid':'nome'}}  label="nome" name="name" {...register("name")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" inputProps={{'data-testid':'email'}}  label="email" name="email" {...register("email")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" inputProps={{'data-testid':'telefone'}} label="telefone" name="telephone" {...register("telephone")} variant="standard" />
                </div>
                <div className="botao" >
                    <Button variant="contained" type ="Submit"> Salvar </Button>
                </div>
                
            </form>
        </div>
    )

    
}

export default Formulario

