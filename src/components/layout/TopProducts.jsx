import React from 'react';
import Product from '../../json/productTops.json';
import '../../style/layout/TopProducts.scss';
import TopProductsCart from './TopProductsCart';

const TopProducts = () => {
	const productsTops = () => {
		return Product.map((product, index) => {
			return (
				<div className="cartTopProducts" key={index}>
					<TopProductsCart product={product} src1={product.image1} src2={product.image2} />
				</div>
			);
		});
	};
	return (
		<div className="topProducts-div">
			<div className="product-title">
				<p className="product-title-p">Top BestSellers</p>
			</div>
			<div className="topProducts-cart">{productsTops()}</div>
		</div>
	);
};

export default TopProducts;
