import React from "react";
import { Link, Route } from 'react-router-dom';
export default function Description ({ match,data}){
  var food= data.find(p => p.id == match.params.id);
  var foodData;

  if(food)
  foodData = <div className="photo">
   <p><h1 className="titre"> {food.title}</h1> </p>
  <p className="image"><img  style={{ width: '30rem' , marginBottom : 40}} src={food.img}/> </p>
<h3 className="p"> <h1 style={{color: 'purple'}}>Ingredients  </h1>{food.ingredients} </h3> 
 <p><h4 className="lien"><h1 className="link" style={{color: 'purple'}}> How to prepare </h1>{food.link}</h4> </p> </div>;
  else 
  foodData = <h2> Sorry. This doesnt exist </h2>;

return (
    <div >
       <div>
       {foodData}
      </div>
    </div>
  )
    }
    
