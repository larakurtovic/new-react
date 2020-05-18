import React from 'react';
import {Link} from 'react-router-dom';
import palaca from '../palaca.jpg';
import palacaa from '../palacaa.jpg';
import '../App.css';

function Druga() {
    return (
      <div classname="druga">
        <img src={palaca}></img><br></br>
        <img src={palacaa}></img><br></br>
        <Link to="/">vrati me nazad</Link>




      </div>
    );
  }
  
  
  export default Druga;