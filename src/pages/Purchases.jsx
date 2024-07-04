import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import { useNavigate } from "react-router-dom";
import "./styles/purchases.css";

const Purchases = () => {
  const purchasesSlice = useSelector((store) => store.purchasesSlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Purchases</h1>
      {purchasesSlice.map((product) => (
        <div
          className="purchase_card"
          key={`${product.createdAt}-${product.product.id}`}
          onClick={() => navigate(`/products/${product?.product?.id}`)}
        >
          {product?.product?.images?.[0]?.url ? (
            <img src={product.product.images[0].url} alt={product.product.title} />
          ) : (
            <div>No Image Available</div>
          )}
          <p>{product?.product?.title}</p>
          <p>{product?.createdAt?.slice(0, 10)}</p>
          <p>{product?.quantity}</p>
          <p>{product?.product?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Purchases;
