import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import SliderButton from './slider-button';
import VideoResource from './video-resource';
import GenericResource from './generic-resource';

import './resources-slider.css';

const isOverlay = el => el.className.includes('overlay');

class ResourcesSlider extends Component {
    static propTypes = {
        resource: shape({}).isRequired,
        onClose: func.isRequired,
        handlePrev: func.isRequired,
        handleNext: func.isRequired,
    }

    renderResource() {
        const { resource } = this.props;
        const { type } = resource;
        switch (type) {
        case 'video':
            return <VideoResource {...resource} />;
        default:
            return <GenericResource {...resource} />
        }
    }

    render() {
        const { resource, onClose, handlePrev, handleNext } = this.props;
        return (
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
                      className="btn-prev"
                      text="<<"
                      onClick={handlePrev}
                    />
                    {this.renderResource(resource)}
                    <SliderButton
                      className="btn-next"
                      text=">>"
                      onClick={handleNext}
                    />
                </div>
            </div>
        );
    }
}

export default ResourcesSlider;
