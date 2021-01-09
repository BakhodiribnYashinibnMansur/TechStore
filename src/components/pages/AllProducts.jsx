import React from 'react';
import AllProductsMap from '../layout/AllProductsMap';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
const AllProducts = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Navbar />
			<AllProductsMap />
			<Footer />
		</div>
	);
};

export default AllProducts;
