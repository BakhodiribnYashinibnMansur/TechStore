import React, { useState } from 'react';
import '../../style/layout/Navbar.scss';
import logo from '../../Img/logo/logo.png';
import phone from '../../Img/png/phone.png';
import search from '../../Img/png/search.png';
import basket3 from '../../Img/svg/basket2.svg';
const Navbar = () => {
	const [ menu, setMenu ] = useState(true);
	return (
		<div className="nav-con">
			<div className="navbar">
				<div className="navbar-outside">
					<div className="navbar-inside">
						<div className="navbar-menu">
							<div
								id="hamburger"
								className={

										menu ? '' :
										'animate'
								}
								onClick={() => setMenu(!menu)}>
								<span className="bar" />

								<span className="bar" />

								<span className="bar" />
								<p className="navbar-menu-text">Categories</p>
							</div>
						</div>
						<div className="logo">
							<img src={logo} alt="web side logo" className="navbar-logo" />
						</div>
						<div className="shop-basket">
							<img src={basket3} alt="web side logo" className="basket-icon" />
							<p className="navbar-basket-text">Shop basket</p>
						</div>
					</div>
					<div className="phone-text">
						<img src={phone} alt="phone" className="phone-photo" />
						<p className="phone-number">+998332870224</p>
					</div>
					<div className="navbar-link">
						<ul className="navbar-ul">
							<li className="navbar-li-link">News</li>
							<li className="navbar-li-link">Discard</li>
							<li className="navbar-li-link">Laptop</li>
							<li className="navbar-li-link">Smartphone</li>
							<li className="navbar-li-link">Smart Watch</li>
							<li className="navbar-li-link">Computers</li>
							<li className="navbar-li-link">Accessories</li>
							<li className="navbar-li-link">Gadgets</li>
						</ul>
					</div>
					<div className="search-area">
						<input type="text" className="search-input" placeholder="Search..." />
						<img src={search} alt="search" className="search-icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
