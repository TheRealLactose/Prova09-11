import React, {useState, useEffect} from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import api from '../../api/user'

const TableUser = () => {

   const [data, setData] = useState([])

//   const getData = async () => {

//     const response = await api.get("/")
    
//     console.log(response)
//     setData(response.data)
//     return response.data
//   }
//   getData()

function createData(name, email, telephone) {
  return  [name, email, telephone];
}


const getData = async () => {

  const response = await api.get("/")

  setData(response.data)
  return response.data

}
  getData()

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
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.telephone}</TableCell>
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