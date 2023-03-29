import React from 'react'
import payment from '../../images/payment.png'
export const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top section">
                <div className="container">

                    <div className="footer-brand">

                        <a href="#" className="logo">Kitter</a>

                        <p className="footer-text">
                            If you have any question, please contact us at <a href="mailto:support@gmail.com"
                                className="link">support@gmail.com</a>
                        </p>

                        <ul className="contact-list">

                            <li className="contact-item">
                                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                                <address className="address">
                                    30 Buttonwood St.Pataskala OH 43062
                                </address>
                            </li>

                            <li className="contact-item">
                                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                                <a href="tel:+16234567891011" className="contact-link">(+1)-6234-56-789-1011</a>
                            </li>

                        </ul>

                        <ul className="social-list">

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Corporate</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Careers</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">About Us</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Contact Us</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">FAQs</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Vendors</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Affiliate Program</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Information</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Online Store</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Refund Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Shipping Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Terms of Service</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Track Order</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Services</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Grooming</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Positive Dog Training</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Veterinary Services</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Petco Insurance</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Pet Adoption</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Resource Center</a>
                        </li>

                    </ul>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">

                    <p className="copyright">
                        &copy; 2022 Made with ♥ by <a href="#" className="copyright-link">codewithsadee.</a>
                    </p>

                    <img src={payment} width="397" height="32" loading="lazy" alt="payment method" className="img" />

                </div>
            </div>

        </footer>
    )
}
