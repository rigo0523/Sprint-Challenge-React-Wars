import React from 'react';
import './App.css';
import Character from "./components/Character"
import styled from "styled-components"

let Button = styled.button`
    background: #F19535;
    padding: 20px 60px;
    color: white;
    margin: 20px;
    border: none;
    box-shadow: 5px 2px 10px;
    cursor: pointer;
    &:hover {
      background: black;
      transition: 1s;
      transform: scale(1.2);
    }
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Button>Characters</Button>
      <Character />
    </div>
  );
}

export default App;
