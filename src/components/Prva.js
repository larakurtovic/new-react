import React from 'react';
import {Link} from 'react-router-dom';
import split from '../split.jpg';

function Prva() {
    return (
      <div>
         
          <img src= {split}></img><br></br>
          <Link to='/druga'>odvedi me na drugu stranicu</Link><br></br>
          <Link to='/treca'>odvedi me na trecu stranicu</Link>


      </div>
    );
  }
  
  
  export default Prva;