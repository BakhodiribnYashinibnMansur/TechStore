import React from 'react';
import '../../style/layout/ProductCarouselCart.scss';
const ProductCarouselCart = ({ phone }) => {
	const ratingStar = () => {
		if (phone.rating === 3) {
			return (
				<div>
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />

					<div className="productCarts-body-rating-bad">
						<div className="productCarts-body-rating-bad-inner" />
					</div>
					<div className="productCarts-body-rating-bad">
						<div className="productCarts-body-rating-bad-inner" />
					</div>
				</div>
			);
		}
		if (phone.rating === 4) {
			return (
				<div>
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />

					<div className="productCarts-body-rating-bad">
						<div className="productCarts-body-rating-bad-inner" />
					</div>
				</div>
			);
		}
		if (phone.rating === 5) {
			return (
				<div>
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
					<div className="productCarts-body-rating-good" />
				</div>
			);
		}
	};
	return (
		<div className="productCarts">
			<div className="productCarts-state">
				<p className="productCarts-state-p">New</p>
			</div>
			<div className="productCarts-body">
				<div className="productCarts-body-photo">
					<img src={phone.image.large} alt="" className="productCarts-body-photo-img" />
				</div>
				<div className="productCarts-body-title">
					<p className="productCarts-body-title-p">{phone.name}</p>
				</div>
				<div className="productCarts-body-brand-rating">
					<div className="productCarts-body-rating">{ratingStar()}</div>
					<div className="productCarts-body-brand">
						<p className="productCarts-body-brand-p">{phone.specs.manufacturer}</p>
					</div>
				</div>
				<div className="productCarts-cost">
					<p className="productCarts-cost-p">$ {phone.price}</p>
				</div>
			</div>

			<div className="productCarts-basket">
				<svg viewBox="0 0 25.67 25.24" className="productCarts-basket-svg" onClick={() => {}}>
					<path d="M24.67 9.24h-3.86a1.34 1.34 0 00-.28-.76l-6.67-8a1.33 1.33 0 00-2 0l-6.67 8a1.34 1.34 0 00-.28.76H1a1 1 0 00-.92 1.38L5.4 23.39a3 3 0 002.77 1.85h9.33a3 3 0 002.77-1.85l5.32-12.77a1 1 0 00-.92-1.38zM12.83 19.9a2.67 2.67 0 112.67-2.66 2.66 2.66 0 01-2.67 2.66zM8 9.24l4.85-5.82 4.85 5.82z" />
				</svg>
			</div>
		</div>
	);
};

export default ProductCarouselCart;
