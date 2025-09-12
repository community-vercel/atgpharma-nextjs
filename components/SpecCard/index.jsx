import React from 'react';
import PropTypes from 'prop-types';

const SpecCard = ({ spec, description }) => {
    return (
        <div className='flex flex-col w-48 mb-4'>
            <h2 className='text-atgBlue text-3xl lg:text-4xl font-bold mb-2'>{spec}</h2>
            <p className='text-base lg:text-lg leading-4 lg:leading-5 text-gray-900'>{description}</p>
        </div> 
    );
};

SpecCard.propTypes = {
    spec: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SpecCard;