// Write your Character component here
import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import CharacterCard from "./CharacterCard"





const Character = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character/?page=2")

        .then(response => {
            console.log(response.data.results, 'data results')
            setCharacter(response.data.results)
        })

        .catch(error => {
            console.log(error, "there's an error here")
        })
    },[])

    return (
        <div className="container">
            {character.map(data => { 
                return <CharacterCard data={data} />
            })}

        </div>
    )
}

export default Character;