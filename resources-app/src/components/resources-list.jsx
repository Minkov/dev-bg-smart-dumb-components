import React from 'react';
import { func, arrayOf, shape } from 'prop-types';
import Resource from './resource';

const ResourcesList = ({ resources, onResourceClick }) => (
    <div>
        <ul className="list resources-list">
            {
                resources.map(resource => (
                    <li
                      className="list-item"
                      key={resource.id}
                    >
                        <Resource
                          {...resource}
                          onResourceClick={onResourceClick}
                        />
                    </li>
                ))
            }
        </ul>
    </div>
);

ResourcesList.propTypes = {
    resources: arrayOf(shape()).isRequired,
    onResourceClick: func.isRequired,
};

export default ResourcesList;
