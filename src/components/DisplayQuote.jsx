import React from 'react';

const DisplayQuote = ({character}) => {
    return(
        <div>
            <p><strong>{character.character}</strong></p>
            <img src={character.image} alt={character.character}/>
            <p><em>{character.quote}</em></p>
        </div>
    )
}

export default DisplayQuote;