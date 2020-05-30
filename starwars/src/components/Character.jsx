// Write your Character component here
import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import CharacterCard from "./CharacterCard"

let Container = styled.section`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 60px auto;
`;

let Button = styled.button`
    background: #FFB252;
`;




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
        <Container> 
            {character.map(data => { 
                return <CharacterCard data={data} />
            })}

        </Container>
    )
}

export default Character;