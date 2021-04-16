import React,{useState} from "react";
import {Card} from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
function FoodCard (props){
  const [value,setValue]= useState(0)
return (
<div className="row"  >
<Card style={{ width: '30rem' , marginBottom : 40}}>
<Card.Img variant="top" src={props.food.img} />
<Card.Body>
<Card.Title>{props.food.title}</Card.Title>
<Card.Text>
{props.food.describe}
</Card.Text>
{props.food.rate}
<Rating
          readOnly 
          name="simple-controlled"
          value={props.food.rate}
        />

</Card.Body>
</Card>
</div>
);
}
export default FoodCard;
  