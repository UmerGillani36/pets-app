import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Search.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Search = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function fetchPets(){
    setIsLoaded(true);
    fetch("http://localhost:3001/api?act=getall")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(false);
        setData(result);
      })    
  }
  useEffect(()=>{
    fetchPets();
  },[])
  useEffect(()=>{
    if(query.length===0){
      fetchPets();
    }
  },[query])
  const handleSearch=()=>{
    if(query.length!==0){
      // let temp = data.filter
      fetch(`http://localhost:3001/api?act=search&term=${query.trim()}%20with`)
          .then(res => res.json())
          .then(
            (result) => {
              // console.log('serach result',result)
              setData(result);
            });
    }else{
    fetchPets();
    }
  }
  return (
    <div>
          <NavBar/>
          <div className={classes.SearchContainer}>
          <TextField className={classes.Input} value={query} onChange={(e)=>setQuery(e.target.value)} label="Search" variant="outlined"/>
          <Button className={classes.Button} variant='contained' onClick={handleSearch}>Search</Button>
          </div>
          <TableContainer component={Paper} sx={{padding:'0px 20px', boxSizing:'border-box'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 && data.map((row,index) => (
            <TableRow
              key={index+1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.animal}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Search