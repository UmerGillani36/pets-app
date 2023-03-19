import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './About.module.css'
const About = () => {
  return (
    <div>
      <NavBar/>
      <div className={classes.MainContentWrapper}>
    <p className={classes.MainContent}>"Welcome to our pet inventory app! We are a team of passionate pet owners and developers who understand the importance of keeping track of your pets' health, wellness, and supplies. We created this app to make it easier for pet owners like you to manage your furry friends' inventory.

Our goal is to provide you with a seamless experience when it comes to managing your pet's inventory. With our app, you can keep track of your pet's food, medication, toys, and other supplies. You can set reminders for when it's time to purchase more of a certain item, and even create a shopping list to take with you to the store.

We understand that every pet is unique, which is why our app allows you to customize your inventory based on your pet's individual needs. You can add multiple pets to the app and track their inventory separately, ensuring that each of your furry friends has everything they need.

Our team is committed to providing the best user experience possible, and we are constantly updating and improving the app to meet the needs of our users. We believe that pets are family, and we want to make sure that you have the tools you need to take the best care of them.

Thank you for choosing our pet inventory app. We hope that it makes managing your pet's inventory a breeze, so you can focus on spending quality time with your furry friends. If you have any questions or feedback, please don't hesitate to contact us."</p>
      </div>
    </div>
  )
}

export default About