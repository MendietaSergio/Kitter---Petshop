import React from 'react'
import img from '../../images/category-1.jpg'
import { categories } from '../../Utils/mockCategories'

export const Categories = () => {
    return (
        <section className="section category" aria-label="category">
            <div className="container">

                <h2 className="h2 section-title">
                    <span className="span">Top</span> categories
                </h2>

                <ul className="has-scrollbar">
                    {categories.map(item => (
                        <li key={item.id} className="scrollbar-item">
                            <div className="category-card">
                                <figure className="card-banner img-holder"  >
                                    <img src={item.img} width="330" height="300" loading="lazy" alt="Cat Food"
                                        className="img-cover" />
                                </figure>

                                <h3 className="h3">
                                    <a href="#" className="card-title">{item.categorie}</a>
                                </h3>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
