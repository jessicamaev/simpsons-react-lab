import './Nav.css'
import NewNav from "../NewNav/NewNav"

export default function Nav(props) {
    return (
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger"><a href="/#">VISIT SPRINGFIELD!</a></li>
                            <li className="trigger"><a href="/#">MENU ITEM</a>
                                <ul className="submenu">
                                    <li><a href="/#">Link 1</a></li>
                                    <li><a href="/#">Link 2</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                    <NewNav name="Flanders Facts" />
                    <NewNav name="Favourite Drinks at Mo's" />
                    <NewNav name="Lisa's Book Recommendations" />
                    <NewNav name="Bart's Skateparks" />
                    <NewNav name="Maggie's Toys" />
                    <NewNav name="Homer's Food For Thought" />

                    <i className="fa fa-search"></i>
                </ul>
            </div>
        </nav>
    );
}