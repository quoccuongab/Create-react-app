import React, { Component } from 'react';
class Product extends Component {

  // constructor(props){
  //   super(props);
  //   this.onAddtoCart = this.onAddtoCart.bind(this)
  // }

  // onAddtoCart(){
   
  //   alert(this.props.children + '-' + this.props.price + ' VND');
  onAddtoCart2 = ()=>{
  alert( 'Mua thanh cong ' + this.props.children + '-' + this.props.price + ' VND');
    
  }
  render() {
    
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
       			<div className="thumbnail">
       				<img alt={ this.props.name } src={ this.props.image } />
       				<div className="caption">
       					<h3>{this.props.children  }</h3>
       					<p>
       						{this.props.price}
       					</p>
       					<p>
       						<a href="google.com" className="btn btn-primary">Xem</a>
       						<a  href="google.com" className="btn btn-success" onClick={ this.onAddtoCart2 } >Giỏ Hàng</a>
       					</p>

       				</div>
       			</div>
       		</div>
      
    );
  }
}

export default Product;
