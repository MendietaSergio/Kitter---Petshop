import React from 'react'
import { products } from '../../Utils/products'

export const Products = () => {
    return (
        <section className="section product" id="shop" aria-label="product">
            <div className="container">

                <h2 className="h2 section-title">
                    <span className="span">Best</span> Seller
                </h2>

                <ul className="grid-list">
                    {products.map(item => (
                        <li key={item.id}>
                            <div className="product-card">

                                <div className="card-banner img-holderProduct">
                                    <img src={item.imgFront} width="360" height="360" loading="lazy"
                                        alt="Commodo leo sed porta" className="img-cover default" />
                                    <img src={item.imgBack} width="360" height="360" loading="lazy"
                                        alt="Commodo leo sed porta" className="img-cover hover" />

                                    <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                                        <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                                    </button>
                                </div>

                                <div className="card-content">

                                    <div className="wrapper">
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                                            <ion-icon name="star" aria-hidden="true"></ion-icon>
                                        </div>

                                        <span className="span">(1)</span>
                                    </div>

                                    <h3 className="h3">
                                        <a href="#" className="card-title">{item.title}</a>
                                    </h3>

                                    <data className="card-price" value="15">${item.price},00</data>

                                </div>

                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}
