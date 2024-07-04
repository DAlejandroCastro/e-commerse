import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProdThunk } from "../store/slices/products.slice";
import ProdCard from "../components/homepage/ProdCard";
import FilterPrice from "../components/homepage/FilterPrice";
import FilterCat from "../components/homepage/FilterCat";
import "./styles/homePage.css";



const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  });

  const [categoryValue, setCategoryValue] = useState("");

  const [menu, setMenu] = useState(false);

  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProdThunk());
  }, []);

  const textInput = useRef();

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  };

  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes(inputValue);
    const price =
      +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;
    const category =
      categoryValue === "" ? true : prod.categoryId === +categoryValue;
    return name && price && category;
  };

  const handleMenu = ( ) => {
    setMenu(!menu);
  };


  return (
    <div className="homepage">
      <div className={`homepage_filters ${menu && 'active'}`}>
        <button onClick={handleMenu}>X</button>
        <FilterPrice setInputPrice={setInputPrice} />
        <FilterCat setCategoryValue={setCategoryValue} />
      </div>
      <div >
      <div className="homepage_search">
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>
  <input ref={textInput} onChange={handleChange} className="input" type="search" placeholder="Search" />
</div>
      </div>
      <button className={menu && 'active'} onClick={handleMenu}>Menu</button>
      <div className="homepage_container">
        {products?.filter(cbFilter).map((prod) => (
          <ProdCard Card key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
