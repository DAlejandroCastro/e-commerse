import React, { useEffect } from 'react';
import usefetch from '../../Hooks/usefetch';
import ProdCard from '../homepage/ProdCard';
import './styles/prodSimilar.css';

const ProdSimilar = ({product}) => {

  const [items, getItems] = usefetch();

  useEffect(() => {
    const path = `/products?categoryId=${product.categoryId}`;
    getItems(path);
  }, []);
  
  console.log(items);

  const cbFilter = (prod) => {
    return prod.id !== product.id
  };

  return (
    <div className='prodsimilar'>
      <h2 className='prodsimilar_title'>Discover siimilar items</h2>
      <div className='homepage_container'>
        {
          items?.filter(cbFilter).map((prod) => (
            <ProdCard
              key = {prod.id}
              prod = {prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProdSimilar;