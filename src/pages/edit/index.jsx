import * as React  from "react";
import {useEffect} from 'react'
import "./index.css";
import Menu from "../../component/menu/index"
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {useForm} from "react-hook-form"
import {useParams} from "react-router-dom"
function Editar () {

    const {register, handleSubmit, reset} = useForm()
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/${id}`)
        .then((response)=>{
            reset(response.data)
        })
    },[])
    
    const addPost = data => axios.put(`http://localhost:8080/user/${id}`, data)
   .then(() => {
       alert("Enviado")
   })
   .catch(()=>{
       alert("Email ou Telefone ja existente!")
   })

   const {id} = useParams()

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit(addPost)}>
                <div>
                    <Menu/>
                </div>
                <div>
                    <TextField id="standard-basic" label="nome" name="name" InputLabelProps={{ shrink: true }} {...register("name")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic "  label="email" name="email" InputLabelProps={{ shrink: true }} {...register("email")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic"  label="telefone" name="telephone" InputLabelProps={{ shrink: true }} {...register("telephone")} variant="standard" />
                </div>
                <div className="botao" >
                    <Button variant="contained" type ="Submit"> Salvar </Button>
                </div>
                
            </form>
        </div>
    )

}

export default Editar;