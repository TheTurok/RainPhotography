import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component{
  render(){
    return(
      <div id = "homePage" className="">
        <NavBar/>
        <h1 id="title">Rain Photography</h1>
      </div>
    )
  }
}
export default Home;
