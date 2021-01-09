import React from 'react';

const ImgCarousel = ({ src, className }) => {
	return (
		<div>
			<img src={src} alt="carousel img " className={className} />
		</div>
	);
};

export default ImgCarousel;
