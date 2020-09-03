import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { dataContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetails = () => {
    const {name} = useParams();
    const [allProduct] = useContext(dataContext);
    //console.log(allProduct)
    const details = allProduct.filter( pd => pd.name === name)
    const [item, setItem] = useState({})
    useEffect(()=>{
        setItem(details[0]);
    },[])
    console.log(item)
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    );
};

export default ProductDetails;