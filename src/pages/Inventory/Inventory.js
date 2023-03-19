import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Inventory.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Inventory = () => {

  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [price , setPrice] = useState("");
  const [description , setDescription] = useState("");
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId]=useState(0);

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

const handleAddPet=()=>{
  if(name.trim().length>0 && !isNaN(age)  && !isNaN(price)  && description.length>0 ){
  if(price>0 && age>0){
    if(!isEdit){
      fetch(`http://localhost:3001/api?act=add&animal=${name}&description=${description}&age=${age}&price=${price}`)
      .then(res => res.json())
      .then(
        (result) => {
          alert("Successfully add the pet")
          fetchPets();
        })    
    }else{
      fetch(`http://localhost:3001/api?act=update&id=${id}&animal=${name}&description=${description}&age=${age}&price=${price}`)
      .then(res => res.json())
      .then(
        (result) => {
          fetchPets();
        });
    }
    clearState();

  }else{
    alert('Price and Age must be greater than 0')
  }
  }else{
alert('Please Fill correct information')
  }
}
const handleEdit=(id)=>{
  setIsEdit(true);
  let temp=data.filter((item)=>item.id===id);
  if(temp.length>0){

    const {id,animal,description,price,age} = temp[0]
    setId(id);
    setName(animal);
    setDescription(description);
    setAge(age);
    setPrice(price);
  }else{
    alert("Something wrong to fetch this data")
  }

}
const handleDelete=(id)=>{
  fetch(`http://localhost:3001/api?act=delete&id=${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          fetchPets();
        })    
}
const clearState=()=>{
  setAge("");
  setName("");
  setDescription("");
  setPrice("");
  setIsEdit(false)
  setId(0);
}
  return (
    <div>
      <NavBar/>
      <div className={classes.MainFormContainer}>
        <h2 style={{margin:'0px 0px 10px 0px'}}>Add Pet </h2>
        <div className={classes.FirstRowContainer}>
          <TextField className={classes.Input} value={name} onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined"/>
          <TextField className={classes.Input} value={price} onChange={(e)=>setPrice(e.target.value)} label="Price" variant="outlined"/>
        </div>
        <div className={classes.SecondRowContainer}>
        <TextField className={classes.Input} value={age} onChange={(e)=>setAge(e.target.value)} label="Age" variant="outlined"/>
        <TextField className={classes.Input} value={description}onChange={(e)=>setDescription(e.target.value)} maxRows={3} multiline label="Description" variant="outlined"/>
        </div>
        <div className={classes.ActionContainer}>
          <Button className={classes.Button} variant='contained' onClick={handleAddPet}>{ isEdit? 'Edit':'Add'}</Button>
        </div>
      </div>

      <TableContainer component={Paper} sx={{padding:'0px 20px', boxSizing:'border-box'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
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
              <TableCell align="right"><DeleteIcon style={{cursor:'pointer'}} onClick={()=>handleDelete(index+1)}/></TableCell>
              <TableCell align="right" ><EditIcon style={{cursor:'pointer'}} onClick={()=>handleEdit(index+1)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Inventory