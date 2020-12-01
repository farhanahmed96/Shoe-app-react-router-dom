import React from 'react';
import Shoes from '../shoes.json';
import { Link } from 'react-router-dom';

function Product() {
    return (
        <div >
            <h1>Welcome To Product</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (<Link key={keyName} className="Link"
                        to={`/product/${keyName}`}>
                        <h2>{shoe.name}</h2>
                        <img src={shoe.img} width={180} height={150} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
