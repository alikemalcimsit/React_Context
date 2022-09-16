import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { AiFillStar } from "react-icons/ai";
function Cards() {
 const {films}=useContext(GlobalContext)
  return (
  <div className="row mx-auto">
{films.map((film)=>{
  return(
    <div className="col-sm-4" >
    <div className="card mx-auto" key={film.id} style={{ width: '22rem' , height:'50rem'}}>
    <img src={film.img} height="60%" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{film.name}</h5>
      <p className="card-text">{film.description}</p>
     <a href={film.link}><button  
     className="btn btn-warning">Go IMDb</button> </a>
     <h3 className="star-icon" >  < AiFillStar/>{film.rating} </h3>
    </div>
  </div>
  </div>
  )
})}
</div>


  );
}

export default Cards;