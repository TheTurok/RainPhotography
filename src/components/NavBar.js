import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
      <div id = "navBar" className="">
        <div>
          <Link className = "btn btn-outline-light" to = "/"> Home </Link>
        </div>
        <div>
          <Link className = "btn btn-outline-light" to = "/About"> About </Link>
        </div>
        <div>
          <Link className = "btn btn-outline-light" to = "/Photos"> Photos </Link>
        </div>
        <div>
          <Link className = "btn btn-outline-light" to = "/Contact"> Contact </Link>
        </div>
      </div>
    )
  }
}
export default NavBar;
