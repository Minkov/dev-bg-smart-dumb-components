import React from 'react';
import { func, arrayOf, shape } from 'prop-types';
import Resource from './resource';

const ResourcesList = ({ resources, handleResourceClick }) => (
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
                          handleResourceClick={handleResourceClick}
                        />
                    </li>
                ))
            }
        </ul>
    </div>
);

ResourcesList.propTypes = {
    resources: arrayOf(shape()).isRequired,
    handleResourceClick: func.isRequired,
};

export default ResourcesList;
