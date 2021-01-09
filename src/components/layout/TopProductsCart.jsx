import React, { useState } from 'react';
import '../../style/layout/TopProductsCart.scss';
const TopProductsCart = ({ product, src1, src2 }) => {
	const [ active, setActive ] = useState(1);
	return (
		<div className="productCart">
			<div className="product-img">
				<img
					src={

							active === 1 ? src1 :
							src2
					}
					alt="product"
					className="product-photo"
				/>
			</div>
			<div className="product-info">
				<div className="product-link">
					<div
						className={

								active === 1 ? 'cart-link-active' :
								'cart-link'
						}
						onClick={() => {
							setActive(1);
						}}
					/>
					<div
						className={

								active === 2 ? 'cart-link-active' :
								'cart-link'
						}
						onClick={() => {
							setActive(2);
						}}
					/>
				</div>
				<div className="product-title">
					<p className="product-title-p">{product.title}</p>
				</div>
				<div className="product-category">
					<p className="product-category-p"> {product.category}</p>
				</div>
				<div className="product-buy">
					<p className="buy-button">Buy</p>
				</div>
			</div>
		</div>
	);
};

export default TopProductsCart;
