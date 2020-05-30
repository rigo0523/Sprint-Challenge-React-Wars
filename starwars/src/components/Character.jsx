// Write your Character component here
import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import CharacterCard from "./CharacterCard"



const Character = () => {
    const [character, setCharacter] = useState([]);

    axios
        .get("https://rickandmortyapi.com/api/character/?page=2")
        .then(response => {
            setCharacter(response.data)
            console.log(response, 'response for character data')
        })

    return (
        <div className="container">


        </div>
    )
}