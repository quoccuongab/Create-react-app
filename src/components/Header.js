import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
      	<div className="container-fluid">
      		<a  href="google.com" className="navbar-brand" >Bài 2 Component</a>
      		<ul className="nav navbar-nav">
      			<li className="active">
      				<a  href="google.com" >Home</a>
      			</li>
      			<li>
      				<a href="google.com" >Sản phẩm</a>
      			</li>
      		</ul>
      	</div>
      </nav>
    );
  }
}

export default Header;
