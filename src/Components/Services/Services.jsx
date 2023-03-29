import React from 'react'
import { service } from '../../Utils/service'
import serviceImg from '../../images/service-image.png'
export const Services = () => {
    return (
        <section className="section service" aria-label="service">
            <div className="container">

                <img src={serviceImg} width="122" height="136" loading="lazy" alt="" className="img" />

                <h2 className="h2 section-title">
                    <span className="span">What your pet needs,</span> when they need it.
                </h2>

                <ul className="grid-list">
                    {service.map(item => (
                        <li key={item.id}>
                            <div className="service-card">
                                <figure className="card-icon">
                                    <img src={item.img} width="70" height="70" loading="lazy"
                                        alt="service icon" />
                                </figure>

                                <h3 className="h3 card-title">{item.title}</h3>

                                <p className="card-text">
                                    {item.info}
                                </p>

                            </div>
                        </li>
                    ))}

                </ul>

            </div>
        </section>
    )
}
