import React, { useState } from 'react';
import phoneProduct from '../../json/PhoneProducts.json';
import ProductCarouselCart from './ProductCarouselCart';
import '../../style/layout/AllProductsMap.scss';
const AllProductsMap = () => {
	const [ brand, setBrand ] = useState('');
	const [ sort, setSort ] = useState('');
	const [ product, setProduct ] = useState(phoneProduct);
	const filterBrand = (e) => {
		if (brand.toLowerCase() === 'Brand'.toLowerCase()) {
			return setProduct(phoneProduct);
		} else {
			return setProduct(
				phoneProduct.filter((item) => item.specs.manufacturer.toLowerCase() === brand.toLowerCase())
			);
		}
	};
	const sortProduct = () => {
		switch (sort) {
			case 'A to Z':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.name.toLowerCase() < b.name.toLowerCase()) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'Z to A':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'New':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.date < b.date) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'Last':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.date > b.date) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'Good Rating':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.rating > b.rating) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'Bad Rating':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.rating < b.rating) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'Low to high Price':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.price < b.price) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;
			case 'High to low Price':
				setProduct(
					phoneProduct.slice().sort((a, b) => {
						if (a.price > b.price) {
							return -1;
						} else {
							return 1;
						}
					})
				);
				break;

			default:
				return phoneProduct;
		}
	};
	console.log(product);
	console.log(sort);
	return (
		<div className="allProducts">
			<div className="allProducts-select">
				<div className="allProducts-select-brand">
					<select
						className="allProducts-select-brand-select"
						value={brand}
						onChange={(e) => {
							setBrand(e.target.value);
						}}
						onClick={() => {
							filterBrand();
						}}>
						<option>Brand</option>
						<option>Apple</option>
						<option>Xiaomi</option>
						<option>Samsung</option>
						<option>One +</option>
						<option>Google</option>
					</select>
				</div>
				<div className="allProducts-select-sort">
					<select
						className="allProducts-select-sort-select"
						value={sort}
						onChange={(e) => {
							setSort(e.target.value);
						}}
						onClick={() => {
							sortProduct();
						}}>
						<option>Sort</option>
						<option>A to Z</option>
						<option>Z to A</option>
						<option>New</option>
						<option>Last</option>
						<option>Good Rating</option>
						<option>Bad Rating</option>
						<option>Low to high Price</option>
						<option>High to low Price</option>
					</select>
				</div>{' '}
			</div>
			<div className="allProducts-cart">
				{product.map((phone, index) => {
					return (
						<div key={index}>
							<ProductCarouselCart phone={phone} />
						</div>
					);
				})}{' '}
			</div>
		</div>
	);
};

export default AllProductsMap;
