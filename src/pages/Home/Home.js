import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Home.module.css';
const Home = () => {
  return (
    <div className={classes.MainHomeContainer}>
        <NavBar/>
        <div className={classes.quote}>
          "The love of a dog is a pure thing. He gives you a trust which is total. You must not betray it." - Michel Houellebecq</div>
    </div>
  )
}

export default Home