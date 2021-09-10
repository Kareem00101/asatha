import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

export default class Product extends Component {
    render() {
        return (
<html className="product-html">
    <body className = "product-body">
        <main className="product-container">
            <div>
                <div className="product-left-column">
                    <img className="active" src={productimg1} alt="" />
                </div>
                <div className="product-right-column">
                    <div className="product-description">
                    <span>Category</span>
                    <h1>name</h1>
                    <p>some description should go here</p>
                    </div>

                    <div className="product-configuration">
                        <div className="product-color">
                            <span>The product color</span>
                        </div>
                    </div>
                    <div className="product-price">
                        <span>product price goes here as in 500$</span>
                        <a href="/Home" className="product-cart-btn">Add to cart</a>
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>
        );
    }
}