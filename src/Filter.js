import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function Filter (props){

return (
<div className="d-flex ">
<input placeholder="Search..." onChange={(event)=>props.changeFn(event.target.value)}/>
&nbsp;&nbsp; Easy &nbsp;&nbsp; 
<ReactStars
count={5}
onChange={props.ratingFilter}
size={24}
activeColor="#ffd700"
/>
&nbsp;&nbsp; Hard &nbsp;&nbsp;
</div>
);
}
export default Filter;
