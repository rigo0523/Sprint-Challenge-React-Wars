import React from "react"
import styled from "styled-components"

const Card = styled.div`
    background: gray;
    width: 23%;
`;
 
const Title = styled.h1`
    text-align: center;
    background: gray;
`;

const CharacterCard = ({data}) => {


    return (
        <Card>
            <Title>Character Name:  </Title>
            
            <img src={data.image} alt="rick and morty characters"/>
        </Card>
    )
   
}

export default CharacterCard;