import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/filterPrice.css';

const FilterPrice = ({ setInputPrice }) => {
    const { handleSubmit, register } = useForm({});

    const submit = (data) => {
        setInputPrice({
            min: data.min,
            max: data.max || Infinity,
        });
    };

    return (
        <form className="filterprice_form" onSubmit={handleSubmit(submit)}>
            <h3 className="filterprice_title">Price</h3>
            <div className="filterprice_group">
                <label htmlFor="min" className="filterprice_label">From</label>
                <input {...register('min')} id='min' type="text" className="filterprice_input" />
            </div>
            <div className="filterprice_group">
                <label htmlFor="max" className="filterprice_label">To</label>
                <input {...register('max')} id='max' type="text" className="filterprice_input" />
            </div>
            <button className="filterprice_button">Filter price</button>
        </form>
    )
}

export default FilterPrice;
