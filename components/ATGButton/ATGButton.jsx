import React from 'react';
import PropTypes from 'prop-types';

const ATGButton = ({ buttonType, label, onClick, styles, classes }) => {
    let atgButton;
    switch (buttonType) {
        case 'primary': {
            atgButton = <button onClick={onClick}
            style={styles}
            className={`mx-2 flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full text-base bg-gradient-to-r from-buttonStart to-atgBlue text-white hover:text-atgBlue hover:from-white hover:to-white focus:outline-none ${classes}`}
        >
            {label}
        </button>
        }
    }
    return atgButton;
};

ATGButton.propTypes = {
    buttonType: (props, propName, componentName) => {
        const validType = ['primary', 'secondary']
        if(!validType.includes(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`)
        }
    },
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    classes: PropTypes.string
};

ATGButton.defaultProps = {
    buttonType: 'primary'
};

export default ATGButton;