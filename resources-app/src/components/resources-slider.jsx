import React from 'react';
import { func, shape } from 'prop-types';
import ResourceInSlider from './resource-in-slider';
import SliderButton from './slider-button';

const isOverlay = el => el.className.includes('overlay');

const ResourcesSlider = ({ resource, onClose, handlePrev, handleNext }) => (
    <div
      className="overlay"
      role="presentation"
      onClick={
            (event) => {
                if (isOverlay(event.target)) { onClose(); }
            }}
    >
        <div className="content">
            <button
              type="button"
              className="btn btn-close"
              onClick={onClose}
            >
                x
            </button>
            <SliderButton
              text="<<"
              onClick={handlePrev}
            />
            <ResourceInSlider resource={resource} />
            <SliderButton
              text=">>"
              onClick={handleNext}
            />
        </div>
    </div>
);

ResourcesSlider.propTypes = {
    resource: shape({}).isRequired,
    onClose: func.isRequired,
    handlePrev: func.isRequired,
    handleNext: func.isRequired,
};

export default ResourcesSlider;
