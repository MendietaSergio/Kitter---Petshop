import React, { useState } from 'react'

export const Header = ({ scrollY }) => {
    const [view, setView] = useState(false)
    return (
        <header className={`header ${scrollY && 'active'}`}>
            <div className="container">

                <button className={`nav-toggle-btn ${view && 'active'}`} aria-label="toggle manu" onClick={() => setView(!view)}>
                    {view ? (
                        <ion-icon name="close-outline" aria-label="true" className="close-icon"></ion-icon>
                    ) : (
                        <ion-icon name="menu-outline" aria-hidden="true" className="menu-icon"></ion-icon>
                    )
                    }
                </button>

                <a href="#" className="logo">Kitter</a>

                <nav className={`navbar ${view && 'active'}`} onClick={() => setView(!true)}>
                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <a href="#home" className="navbar-link" data-nav-link>Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#shop" className="navbar-link" data-nav-link>Shop</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Collections</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Blogs</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Contact</a>
                        </li>

                    </ul>

                    <a href="#" className="navbar-action-btn">Log In</a>
                </nav>

                <div className="header-actions">

                    <button className="action-btn" aria-label="Search">
                        <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn user" aria-label="User">
                        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <button className="action-btn" aria-label="cart">
                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                        <span className="btn-badge">0</span>
                    </button>

                </div>

            </div>
        </header>
    )
}
