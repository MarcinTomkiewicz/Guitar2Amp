import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export function CarouselComponent() {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: `${process.env.PUBLIC_URL + '/guitar-1.png'}`,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: `${process.env.PUBLIC_URL + '/guitar-2.jpg'}`,
    },
  ];

  return (
    <Carousel
      className="top__carousel"
      stopAutoPlayOnHover
      swipe
      animation="slide"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
      
    <Paper>
      <img src={props.item.img} alt="" className="carousel__img"></img>
      <div className="carousel__writing">
      <h2 className="carousel__element">{props.item.name}</h2>
      <p className="carousel__element">{props.item.description}</p>
      <Button variant="contained" style={{width: "fit-content"}}>Check it out!</Button>
      </div>

    </Paper>
  );
}
