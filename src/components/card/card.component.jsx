import React from 'react';
import './card.styles.css';
//import images from './images' //try using this.props.images in your card constant
import Luke from './assets/Luke Skywalker.jpg';
import C3PO from './assets/C-3PO.jpg';
import R2D2 from './assets/R2-D2.jpg';
import Darth from './assets/Darth Vader.jpg';
import Leia from './assets/Leia Organa.jpg';
import Owen from './assets/Owen Lars.jpg';
import Beru from './assets/Beru Whitesun lars.jpg';
import R5D4 from './assets/R5-D4.jpg';
import Biggs from './assets/Biggs Darklighter.jpg';
import Obi from './assets/Obi-Wan Kenobi.jpg';
let images = {
    172: Luke, 
    167: C3PO, 
    96: R2D2, 
    202: Darth, 
    150: Leia, 
    178: Owen, 
    165: Beru, 
    97: R5D4, 
    183: Biggs, 
    182: Obi
};


export const Card = (props) => (
    <div className='card-container'>
        <h3> { props.monster.name } </h3>
        <img alt='monster' 
            src={images[props.monster.height]} />
        <p> Height: {props.monster.height}</p> 
        <p> Mass: {props.monster.mass}</p> 
    </div>
)