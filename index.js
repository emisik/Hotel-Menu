import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    name: "Pizza Funghi",
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

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <strong>
        <h1>Master Stroke Hotel</h1>
      </strong>
    </header>
  );
}

function Main() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza name={pizza} />
        ))}
      </ul>
    </div>
  );
}

function Pizza({name}) {
  return (
    <li className="pizza">
      <img className="" src={name.photoName} alt={name.alt} />
      <div>
        <h3>{name.name}</h3>
        <p>{name.ingredients}</p>
        <span>${name.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = 7;
  const isClosed = 19;
  return (
    <footer className="footer">
      <div className="order">
        {hour}:{new Date().getMinutes()}
        {hour >= isOpen && hour < isClosed ? (
          <strong>We are currently open</strong>
        ) : (
          <strong>We are currently closed</strong>
        )}
      </div>
      <button className="btn">Order Now</button>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
