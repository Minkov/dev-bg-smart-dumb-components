import React from 'react';
import { func, string } from 'prop-types';

const SliderButton = ({ onClick, text }) => (
    <div>
        <button
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
};

export default SliderButton;
