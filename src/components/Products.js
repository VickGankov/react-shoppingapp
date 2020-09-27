import React, { Component } from 'react'
import formatCurrency from"../util"

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(( product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#"+product._id}> </a>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                    <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button-primary">Add To Cart</button>
                                    </div>
                            </div>
                        </li>
                    )))}
                </ul>
            </div>
        )
    }
}
