import React, {useState, useEffect} from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const TableUser = () => {

  const [users, setUsers] = useState([])

  useEffect(()=> {
      axios.get('http://localhost:8080/user')
      .then((response) =>{
        setUsers(response.data)
      })
      .catch(()=> {
        alert("Problema ao enviar formulario")
      })
  },[])


  return (
    <div>
          <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">telefone</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.telephone}</TableCell>
              <TableCell align="right"><Button variant="contained">Editar</Button></TableCell>
              <TableCell align="right"><Button variant="outlined" color="error">Deletar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default TableUser;