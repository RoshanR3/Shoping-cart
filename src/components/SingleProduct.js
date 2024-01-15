import React from "react";
import "./styles.css";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

function Singleeuct({ e }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={e.image} alt={e.name} />
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {e.price.split(".")[0]}</span>
            {e.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={e.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === e.id) ? (
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: e,
                })
              }
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: e,
                })
              }
              disabled={!e.inStock}
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Singleeuct;
