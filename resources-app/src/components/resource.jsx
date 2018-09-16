import React from 'react';
import { func, number, string } from 'prop-types';

const Resource = ({ id, title, type, onResourceClick }) => (
    <button
      type="button"
      className={`btn resource ${type}`}
      href="#"
      onClick={() => onResourceClick(id)}
    >
        {title}
    </button>
);

Resource.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    type: string.isRequired,
    onResourceClick: func.isRequired,
};

export default Resource;
