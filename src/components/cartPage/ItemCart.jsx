import React from "react";
import "./styles/itemCart.css";
import { deleteProdsThunk, updateProdsThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const ItemCard = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProdsThunk(prod.id));
  };

  const handleLess = ()=>{
    if (prod.quantity > 1) {
      dispatch(updateProdsThunk(prod.id, {
        "quantity": prod.quantity - 1,
    }));
    } 
  };

  const handlePlus = ()=>{
    dispatch(updateProdsThunk(prod.id, {
      "quantity": prod.quantity + 1,
  }));
  };

  return (
    <article className="itemcart">
      <h3 className="itemcart_title">{prod.product?.title}</h3>
      <figure className="itemcart_img">
        <img src={prod.product?.images[0].url} alt="product image" />
      </figure>
      <div className="itemcart_btns">
        <button onClick={handleLess}>-</button>
        <span>{prod.quantity}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={handleDelete} className="itemcart_btn">
        Delete
      </button>
      <p className="itemcart_total">
        Total: $ <span>{prod.product?.price * prod.quantity}</span>
      </p>
    </article>
  );
};

export default ItemCard;
