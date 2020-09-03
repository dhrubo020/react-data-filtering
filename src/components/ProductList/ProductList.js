import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../../App';
import { filterItemContext } from '../Home/Home';

const ProductList = () => {
    const product = useContext(filterItemContext);
    const allProduct = product;

    console.log(allProduct)
    const Style = {
        border: '1px solid black',
        margin: '10px 10px',
        padding: '10px 10px',
        width: '50%'
    }
    return (
        <div>
            {
                allProduct.map( each => 
                    <Link to={`/product/${each.name}`}>
                        <div style={Style}>
                        <p>Class : {each.class}</p>
                            <h1>Name : {each.name}</h1>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default ProductList;