import React, { useEffect, useRef } from 'react';
import usefetch from '../../Hooks/usefetch';
import './styles/filterCard.css'; 

const FilterCat = ({ setCategoryValue }) => {
    const [categories, getCategories] = usefetch();

    useEffect(() => {
        getCategories('/categories');
    }, []);

    const itemSelect = useRef();

    const handleChange = () => {
        setCategoryValue(itemSelect.current.value);
    };

    return (
        <div className="filtercat">
            <h3 className="filtercat_title">Category</h3>
            <select className="filtercat_select" ref={itemSelect} onChange={handleChange}>
                <option value="">All products</option>
                {
                    categories?.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FilterCat;
