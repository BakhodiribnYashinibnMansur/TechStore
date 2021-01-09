import React from 'react';
import '../../style/layout/Footer.scss';
import phone from '../../Img/footer/phone.svg';
import mail from '../../Img/footer/mail.svg';
import location from '../../Img/footer/location.svg';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-link">
				<div className="footer-link-p">tech Store</div>
				<div className="footer-link-p">tech Store</div>
				<div className="footer-link-p">tech Store</div>
				<div className="footer-link-p">tech Store</div>
				<div className="footer-link-p">tech Store</div>
				<div className="footer-link-p">tech Store</div>
				<div className="footer-link-p">tech Store</div>
			</div>
			<div className="footer-contact">
				<div className="footer-contact-one">
					<img src={phone} alt="" className="footer-contact-one-img" />
					<p className="footer-contact-one-p">+ 998 33 287 02 24</p>
				</div>
				<div className="footer-contact-one">
					<img src={mail} alt="" className="footer-contact-one-img" />
					<p className="footer-contact-one-p">phapp0224mb@gmail.com</p>
				</div>
				<div className="footer-contact-one">
					<img src={location} alt="" className="footer-contact-one-img" />
					<p className="footer-contact-one-p">Navoiy Uzbekistan</p>
				</div>
			</div>
			<div className="footer-copyright">
				<p className="footer-copyright-p"> &copy; Copyright 2021</p>
			</div>
		</div>
	);
};

export default Footer;
