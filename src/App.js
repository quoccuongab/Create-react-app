import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {
  onClick(){
    console.log('Day la app');
  }

onAddProduct=()=>{
    console.log(this.refs.name.value);

}

  render() {
    var products = [
                        {    id:1,
                            price : 15000000,
                            name : 'Iphone 6',
                            image : 'http://onewaymobile.vn/wp-content/uploads/2018/02/ipx-like-new.png',
                            status :true
                        },
                        {    id:2,
                            name : 'Iphone 7',
                            price : 15000000,
                            image : 'http://onewaymobile.vn/wp-content/uploads/2018/02/ipx-like-new.png',
                            status :true
                        },
                        {    id:3,
                            name : 'Iphone 8',
                            price : 15000000,
                            image : 'http://onewaymobile.vn/wp-content/uploads/2018/02/ipx-like-new.png',
                            status :true
                        },
                        {    id:4,
                            name : 'Iphone 8',
                            price : 15000000,
                            image : 'http://onewaymobile.vn/wp-content/uploads/2018/02/ipx-like-new.png',
                            status :true
                        },
                        {    id:5,
                            name : 'Iphone 8',
                            price : 15000000,
                            image : 'http://onewaymobile.vn/wp-content/uploads/2018/02/ipx-like-new.png',
                            status :true
                        },
                        {    id:6,
                            name : 'Iphone 8',
                            price : 15000000,
                            image : 'http://onewaymobile.vn/wp-content/uploads/2018/02/ipx-like-new.png',
                            status :true
                        },

                   ];
 let elements =products.map((product,index) => {
      let result ='';
      if (product.status){
        result = <Product
                   key={product.id}
                   price= {product.price}
                   image= {product.image}
                   >
                   {product.name}
                   </Product>
      }
        return result;

      });

  
      return (
        <div>
             <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <a className="navbar-brand" href="google.com">Title</a>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="google.com">Home</a>
                  </li>
                  <li>
                    <a href="google.com">Link</a>
                  </li>
                </ul>
              </div>
              </nav>
             <div className="container-fluid">
             <div className="row">
             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
     
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                  <label >Tên sản phẩm</label>
                  <input type="text" className="form-control"  ref ="name"/>
                </div>
                </div>
              </div>
              
                
              
                <button type="submit" className="btn btn-primary" onClick={this.onAddProduct} >Lưu</button>
            
               
             </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               {elements}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           
              </div>

              
             </div>
             </div>
             </div>
        </div>

        );
  }
}

export default App;
