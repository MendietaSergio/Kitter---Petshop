import React from 'react'
import { popularBrands } from '../../Utils/popularBrands'

export const PopularBrands = () => {
    return (
        <section className="section brand" aria-label="brand">
            <div className="container">

                <h2 className="h2 section-title">
                    <span className="span">Popular</span> Brands
                </h2>

                <ul className="has-scrollbar">
                    {popularBrands.map(item => (
                        <li className="scrollbar-item" key={item.id}>
                            <div className="brand-card img-holderBrands" >
                                <img src={item.img} width="150" height="150" loading="lazy" alt="brand logo"
                                    className="img-cover" />
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
