import React from 'react';


const BeerCard = (props) => {
    return(
        <li >
            <img style={{ height: '200px' }} src={props.image_url} alt={''}></img>
            <h3>
            {props.name}
            <span>{props.first_brewed}</span>
            </h3>
            <h4>{props.tagline}</h4>
            <p><span>{props.abv}</span>{props.description}</p>
            <p></p>

            <button></button>
            
        </li>)
}


// style={{ listStyle: none }}

export default BeerCard