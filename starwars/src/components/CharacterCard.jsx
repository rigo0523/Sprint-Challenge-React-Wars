import React from "react"
import styled from "styled-components"


//main card containing each character info
const Card = styled.div`
    background: white;
    padding: 10px;
    width: 21%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    box-shadow: 5px 10px 30px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all 1s;
    }
`;

//character name and type header 
const Header = styled.header`
    width: 100%;
    margin: 0;
`;

//character name 
const Title = styled.h1`
    text-align: center;
    font-size: 1.2em;
    margin: 0;
`;

//Character type
const Type = styled.h2`
    text-align: left;
    font-size: 1em;
    margin: 2px;
`;

//Type 2 inside type 1 inherits same properties
const Type2 = styled(Type)`
    padding: 1px;
`;

// character image
const Image = styled.img`
    width: 100%;
`;

// status, species, type, etc...
const Info = styled.p`
   font-weight: 1000;
   text-align: left;
`;

// Container for status, species, type, etc..
const DescriptionContainer = styled.div`
    width: 100%;
    margin: 0;
`;

const CharacterCard = ( {data} ) => {

    return (
        <Card key={data.id}>
            <Header>
                <Title>Character Name: {data.name} </Title>
                <Type2>Type: {data.type} </Type2>
                <Type>Gender: {data.gender} </Type>
            </Header>
            
            <Image src={data.image} alt="rick and morty characters"/>

            <DescriptionContainer>
                <Info>Status: {data.status}</Info>
                <Info>Species: {data.species}</Info>
                <Info>Location: {data.location.name}</Info>
            </DescriptionContainer>
        </Card>
    )
   
}

export default CharacterCard;