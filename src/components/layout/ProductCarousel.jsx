import React, { useState } from 'react';
import ProductCarouselCart from './ProductCarouselCart';
import '../../style/layout/ProductCarousel.scss';
import phoneProduct from '../../json/PhoneProducts.json';
const ProductCarousel = () => {
	const [ step, setStep ] = useState(0);
	const moveLeft = () => {
		if (step > 0 && step < 5) {
			setStep(step - 1);
		}
	};
	const moveRight = () => {
		if (step < 4) {
			setStep(step + 1);
		}
	};

	return (
		<div className="product-carousel">
			<div className="product-carousel-details">
				<div className="product-carousel-title">
					<p className="product-carousel-title-p">Top Phone Products</p>
				</div>
				<div className="product-carousel-btn">
					<div
						className="product-carousel-btn-left"
						onClick={() => {
							moveLeft();
						}}
					/>
					<div
						className="product-carousel-btn-right"
						onClick={() => {
							moveRight();
						}}
					/>
				</div>
			</div>
			<div
				className="product-carousel-carts"
				style={{ transform: `translateX(${-step * 25}%)`, transition: 'all 2s' }}>
				{phoneProduct.map((phone, index) => {
					return (
						<div key={index}>
							<ProductCarouselCart phone={phone} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductCarousel;
