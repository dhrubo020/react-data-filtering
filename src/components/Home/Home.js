import React from 'react';
import ProductList from '../ProductList/ProductList';
import { useState } from 'react';
import { useContext } from 'react';
import { dataContext } from '../../App';
import { useEffect } from 'react';
import { createContext } from 'react';


export const filterItemContext = createContext();

const Home = () => {
    const [product, setProduct] = useContext(dataContext); // load context data

    const [filterData, setFilterData] = useState(product) // set filter data
    console.log("onload ", filterData)
    const [filterClass, setClass] = useState(0) // set filter state
    const clickBtn = (props) =>{
        console.log(parseInt(props))
        setClass(parseInt(props))
    }
    
    useEffect(()=>{
        if(filterClass === 0){
            setFilterData(product)
        }else{
             const filtering = product.filter(pd => pd.class === filterClass)
            console.log("filtering ", filtering);
            setFilterData(filtering)
        }
       
    },[filterClass])

    return (
        <div>
            <button onClick={() => clickBtn('0')}>All class</button>
            <button onClick={() => clickBtn('1')}>class 1</button>
            <button onClick={() => clickBtn('2')}>class 2</button>
            <button onClick={() => clickBtn('3')}>class 3</button>
            <button onClick={() => clickBtn('4')}>class 4</button>
            <button onClick={() => clickBtn('5')}>class 5</button>

            <filterItemContext.Provider value={filterData}>
                <h1>Class : {filterClass}</h1>
                <ProductList/>
            </filterItemContext.Provider>
        </div>
    );
};

export default Home;