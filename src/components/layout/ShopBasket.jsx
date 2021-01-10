import React from 'react';
import '../../style/layout/ShopBasket.scss';
import photo from '../../Img/products/iphone2.jpg';
const ShopBasket = () => {
	return (
		<div className="shop-basket">
			<div className="shop-basket-photo">
				<img src={photo} alt="cart" className="shop-basket-photo-img" />
			</div>
			<div className="shop-basket-title">
				<p className="shop-basket-title-p">Iphone 12 Pro Max</p>
			</div>
			<div className="shop-basket-info">
				<div className="shop-basket-info-counter">
					<div className="shop-basket-info-counter-increase">
						<p className="shop-basket-info-counter-increase-p">+</p>
					</div>
					<div className="shop-basket-info-counter-number">
						<p className="shop-basket-info-counter-number-p">9</p>
					</div>
					<div className="shop-basket-info-counter-decrease">
						<p className="shop-basket-info-counter-decrease-p">-</p>
					</div>
				</div>
				<div className="shop-basket-info-buy">
					<div className="shop-basket-info-buy-cost">
						<p className="shop-basket-info-buy-cost-p">$ 999</p>
					</div>
					<div className="shop-basket-info-buy-payment">
						<p className="shop-basket-info-buy-payment-p">Pay</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopBasket;
