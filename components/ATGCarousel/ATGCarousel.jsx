import React from 'react';
import PropTypes from 'prop-types';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

const ATGCarousel = ({ children, breakpoints, LeftArrow, RightArrow, ...carouselProps }) => {
    return (
        <Carousel
            {...carouselProps}
            customLeftArrow={LeftArrow ? <LeftArrow /> : undefined}
            customRightArrow={RightArrow ? <RightArrow /> : undefined}
            responsive={breakpoints || responsive}
        >
            {children}
        </Carousel>
    );
};

ATGCarousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    breakpoints: PropTypes.exact({
        desktop: PropTypes.exact({
            breakpoint: PropTypes.exact({
                max: PropTypes.number,
                min: PropTypes.number
            }),
            items: PropTypes.number
        }),
        tablet: PropTypes.exact({
            breakpoint: PropTypes.exact({
                max: PropTypes.number,
                min: PropTypes.number
            }),
            items: PropTypes.number
        }),
        mobile: PropTypes.exact({
            breakpoint: PropTypes.exact({
                max: PropTypes.number,
                min: PropTypes.number
            }),
            items: PropTypes.number
        }),
    }),
    leftArrow: PropTypes.element,
    rightArrow: PropTypes.element,
};

ATGCarousel.defaultProps = {
};


export default ATGCarousel;