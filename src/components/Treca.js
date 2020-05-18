import React from 'react';
import {Link} from 'react-router-dom';
import ssplit from '../ssplit.jpg';

function Treca() {
    return (
      <div>

        <img src= {ssplit}></img><br></br>
        <Link to="/">vrati me nazad</Link>




      </div>
    );
  }
  
  
  export default Treca;