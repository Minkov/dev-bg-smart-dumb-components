import React from 'react';
import { func, number, string } from 'prop-types';

const Resource = ({ id, title, resourceType, handleResourceClick }) => (
    <button
      type="button"
      className={`btn btn-resource ${resourceType}`}
      href="#"
      onClick={() => handleResourceClick(id)}
    >
        {title}
    </button>
);

Resource.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    resourceType: string.isRequired,
    handleResourceClick: func.isRequired,
};

export default Resource;
