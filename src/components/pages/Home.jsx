import React from 'react';
import AddsCarousel from '../layout/AddsCarousel';
import Navbar from '../layout/Navbar';
import '../../style/page/Home.scss';
import TopProducts from '../layout/TopProducts';
import TechNews from '../layout/TechNews';
import ProductCarousel from '../layout/ProductCarousel';
import Footer from '../layout/Footer';
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<div className="TopAdds">
				<AddsCarousel />
				<TopProducts />
			</div>
			<div className="main-part">
				<div className="sidebar">
					<TechNews />
				</div>
				<div className="main-container">
					<ProductCarousel />
					<ProductCarousel />
					<ProductCarousel />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
