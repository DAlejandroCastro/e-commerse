import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import './styles/prodSlider.css'


const ProdSlider = ({ product }) => {

  const handleAdd = () => {
    dispatch(
      postCartProdsThunk({
        quantity: 1,
        productId: prod.id,
      })
    );
  };

  return (
    <div className = 'slidercontainer' >
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
      }}
      aria-label="My Favorite Images"
    >
      {
        product?.images.map(image => (
        <SplideSlide key={image.id}>
          <img src={image.url} alt={`Image${image.id}`} />
        </SplideSlide>))
      } 
      
    </Splide>
    </div>
    
  );
};

export default ProdSlider;
