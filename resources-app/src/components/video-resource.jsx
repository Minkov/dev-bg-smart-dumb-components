import React from 'react';
import { string } from 'prop-types';
import { getVideoId } from '../utils/url-utils';

const VideoResource = ({ title, link }) => (
    <div>
        <h1>{title}</h1>
        <iframe
          title={title}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${getVideoId(link)}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
    </div>
);

VideoResource.propTypes = {
    title: string.isRequired,
    link: string.isRequired,
};

export default VideoResource;
