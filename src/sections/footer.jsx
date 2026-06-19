import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer-main container'>
            <div className='footer'>
                <div className='footer-logo'>
                    <a href='#'>
                        <img src='Logo.svg' alt='img' />
                    </a>
                    <div className='footer-line'></div>
                    <div>
                        <img src='app-img1-1.png' alt='img' />
                        <img src='app-img2-1.png' alt='img' />
                    </div>
                </div>

                <div className='descriptions'>
                    <div>
                        <h3>About us</h3>
                        <ul>
                            <li>Concept</li>
                            <li>Franchise</li>
                            <li>Business</li>
                            <li>Restaurant signup</li>
                            <li>For Investors</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Get help</h3>
                        <ul>
                            <li>Read FAQs</li>
                            <li>Restaurants</li>
                            <li>Specialities</li>
                            <li>Sign up to deliver</li>
                            <li>English</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contact us</h3>
                        <ul>
                            <li>Yellow kitchen Paris 11</li>
                            <li>69 avenue de la Republique 75011 Paris</li>
                            <li>0800 111 126</li>
                            <li>contact@yellowkitchens.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='last-div'>
                <div className='footer-media'>
                    <a href='#'>
                        <img src='insta.svg' alt='img' />
                    </a>
                    <a href='#'>
                        <img src='twitter.svg' alt='img' />
                    </a>
                    <a href='#'>
                        <img src='fb.svg' alt='img' />
                    </a>
                </div>
                <nav className='footer-nav'>
                    <a href='#'>Privacy policy</a>
                    <a href='#'>Terms</a>
                    <a href='#'>© 2020 Yellow kitchen</a>
                </nav>
            </div>
        </div>
    );
};
export default Footer;
