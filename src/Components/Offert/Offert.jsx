import React from 'react'
import { ofert } from '../../Utils/ofert'

export const Offert = () => {
    return (
        <section className="section offer" aria-label="offer">
            <div className="container">

                <ul className="grid-list">
                    {ofert.map(item => (
                        <li key={item.id}>
                            <div className="offer-card has-bg-imageOffer img-holder"
                                // style={`background-image: url(${item.img})`}
                            >
                                <img src={item.img} alt={item.title1} className="imgOffer" />
                                <p className="card-subtitle">{item.subTitle}</p>

                                <h3 className="h3 card-title">
                                    {item.title1} <span className="span">{item.title2}</span>
                                </h3>

                                <a href="#" className="btn">Read More</a>

                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </section >
    )
}
