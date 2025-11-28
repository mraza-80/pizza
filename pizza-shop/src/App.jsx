import { useState } from 'react'
import React from 'react';


function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div>
      <Header />
      <Menu />
      <Footer />

    </div>
  )
}

function Header() {
  return <p>
    Pizza shop in Borlänge</p>



}
function Menu() {
  return
  <div className='pizzas'>
    <h2> Menu</h2>

  </div>
}



function Pizza() {

  return <div>

    <h3>Pizza Spinaci</h3>
    <span>Tomato, mozarella, and pepperoni</span>
    <p>18</p>

  </div>
}


function Footer() {

  return
  <div className='footer'>
    <span>{new Date().getHours()
    }</span>
  </div>
}
export default App
