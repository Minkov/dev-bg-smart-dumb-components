import React from 'react';
import { func, string } from 'prop-types';

import './slider-button.css';

const SliderButton = ({ onClick, text, className }) => (
    <div className={className}>
        <button
          className="btn-slider"
          type="button"
          onClick={onClick}
        >
            {text}
        </button>

    </div>
);

SliderButton.propTypes = {
    onClick: func.isRequired,
    text: string.isRequired,
    className: string,
};

SliderButton.defaultProps = { className: '' };

export default SliderButton;
