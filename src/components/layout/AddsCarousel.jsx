import React, { useState, useEffect, useRef } from 'react';
import ImgCarousel from './ImgCarousel';
import img1 from '../../Img/carousel/img1.jpg';
import img2 from '../../Img/carousel/img2.jpg';
import img3 from '../../Img/carousel/img3.jpg';
import img4 from '../../Img/carousel/img4.jpg';
import img5 from '../../Img/carousel/img5.jpg';
import img6 from '../../Img/carousel/img6.jpg';
import img7 from '../../Img/carousel/img7.jpg';
import '../../style/layout/AddsCarousel.scss';
import logo from '../../Img/logo/logo.png';

const AddsCarousel = () => {
	const [ sliderArray, setSliderArray ] = useState([
		<ImgCarousel className="carouselImg" src={img1} />,
		<ImgCarousel className="carouselImg" src={img2} />,
		<ImgCarousel className="carouselImg" src={img3} />,
		<ImgCarousel className="carouselImg" src={img4} />,
		<ImgCarousel className="carouselImg" src={img5} />,
		<ImgCarousel className="carouselImg" src={img6} />,
		<ImgCarousel className="carouselImg" src={img7} />
	]);
	const [ index, setIndex ] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}
	const modal = index % 7;
	const line = () => {
		if (index < 7) {
			return 6 * (index + 1);
		}
		if (index > 7) {
			if (index % 7 < 7) {
				return 6 * (modal + 1);
			}
		}
	};
	line();
	useEffect(
		() => {
			resetTimeout();
			timeoutRef.current = setTimeout(() => {
				setIndex((prevIndex) => prevIndex + 1);
				setSliderArray([
					...sliderArray,
					sliderArray[

							index < 6 ? index :
							index % 6
					]
				]);
			}, 7000);
			setTimeout(() => {
				setSliderArray([
					...sliderArray,
					sliderArray[

							index < 6 ? index :
							index % 6
					]
				]);
			}, 6000);
			return () => {
				resetTimeout();
			};
		},
		[ index ]
	);
	const carouselRenderImg = () => {
		return sliderArray.map((item, id) => {
			return (
				<div
					key={id}
					className="slide-div"
					style={{ transform: `translateX(${-index * 100}%)`, transition: 'all 2s' }}>
					{item}
				</div>
			);
		});
	};

	return (
		<div className="carousel-div">
			<div className="carousel-outer">
				<div className="triangle-div">
					<span
						className={

								index <= 7 ? index === 0 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 0 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(0);
						}}
					/>
					<span
						className={

								index <= 7 ? index === 1 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 1 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(1);
						}}
					/>
					<span
						className={

								index <= 7 ? index === 2 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 2 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(2);
						}}
					/>
					<span
						className={

								index <= 7 ? index === 3 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 3 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(3);
						}}
					/>
					<span
						className={

								index <= 7 ? index === 4 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 4 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(4);
						}}
					/>
					<span
						className={

								index <= 7 ? index === 5 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 5 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(5);
						}}
					/>
					<span
						className={

								index <= 7 ? index === 6 ? 'triangle-link-active' :
								'triangle-link' :
								index % 7 === 6 ? 'triangle-link-active' :
								'triangle-link'
						}
						onClick={() => {
							setIndex(6);
						}}
					/>
				</div>
				<div className="carousel-inner">{carouselRenderImg()}</div>
				<div className="logo-div">
					<img src={logo} alt="" className="logo-img" />
				</div>
				<div className="line-div">
					<div className="line" style={{ width: `${line()}rem`, transition: 'all .7s' }} />
				</div>
			</div>
		</div>
	);
};
export default AddsCarousel;
