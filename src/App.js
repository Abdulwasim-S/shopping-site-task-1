import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from "react";
import productList from './products';
import { Rate } from 'antd';


const App=()=>{
  const [count,setCount]=useState(0);
  return(
    <div className='contant'>
      <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
        <div className="container px-4 px-lg-5 ">
            <a className="navbar-brand text-light" href="#!">Shadow Shopping</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link  text-light" aria-current="page" href="#!">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#!">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-light" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" onClick={()=>filterBy("all-products")} >All Products</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" onClick={()=>filterBy("mobile")} >Mobile</a></li>
                            <li><a className="dropdown-item" onClick={()=>filterBy("laptop")} >Laptop</a></li>
                            <li><a className="dropdown-item" onClick={()=>filterBy("watch")} >Watch</a></li>
                            <li><a className="dropdown-item" onClick={()=>filterBy("camera")} >Camera</a></li>
                            <li><a className="dropdown-item" onClick={()=>filterBy("toy")} >Toy</a></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex shadow-lg">
                    <button className="btn btn-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-success text-white ms-1">{count}</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
      <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Best of best</h1>
                <p className="lead fw-normal text-white-50 mb-0">shop here for affordable price</p>
              </div>
          </div>
      </header>
    <div className="container pt-5 mb-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          productList.map((product,index)=>(
            <Product
            key ={index}
            props={product}
            count={count}
            setCount={setCount}
            />
          ))
        }
      </div>
    </div>
    <footer className="py-5 bg-dark">
      <p className="m-0 text-center text-white">Copyright © Shadow Shopping 2023</p>
    </footer>
    </div>
    
  );
};
export default App;

const Product=({props,count,setCount})=>{
  const [show, setShow] = useState(true);
  function addToCart(){
    setCount(count+1);
    setShow(!show)
  }
  function removeFromCart(){
    setCount(count-1);
    setShow(!show)
  }
 return (
   <div className="box col-6 col-lg-3 col-md-4 pt-3 mb-3" id={props.id+"-"+props.category+"all-products"}>
    <div className="card h-100 text-center" style={{ width: "100%" }}>
     <div className='imageToZoom'>
     <img className="card card-img" src={props.image} alt="Card image cap"/>
     </div>
     <div className="card-body">
       <h3 className="card-title">{props.brand}</h3>
       <h4 className="card-title">{props.productName}</h4>
       
       <p className="card-text ">Rating : <Rate disabled defaultValue={+props.rating} allowHalf count={5}/></p>
       <p>Price : <s className='text-muted'>${+props.price+123}</s></p>
       <h5 className="card-text">${props.price}</h5>
       {show ? (
         <button className="btn btn-success" onClick={addToCart}>
           Add to Cart
         </button>
       ) : (
         <button className="btn btn-danger" onClick={removeFromCart}>
           Remove Cart
         </button>
       )}
     </div>
   </div>
   </div>
  );
}
function filterBy(filterKey){
  var boxes=document.getElementsByClassName("box");
  for(var i=0;i<boxes.length;i++){
    var box=boxes[i];
    if(box.id.includes(filterKey)){
      box.style.display="block";
    }
    else{
      box.style.display="none";
    }
  }
}