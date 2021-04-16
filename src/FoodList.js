import React from "react";
import FoodCard from "./FoodCard";
import {Link} from "react-router-dom";
function FoodList (props){
return (
props.obj.map((item, index)=><Link to={`/description/${item.id}`}> <FoodCard food={item} key={index} /></Link>)
);
}
export default FoodList;
  