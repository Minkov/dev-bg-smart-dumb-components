import React from 'react';
import { string } from 'prop-types';

const GenericResource = ({ title, link }) => (
    <div>
        <h1>{title}</h1>
        <form method="get" action={link}>
            <button type="submit">Download!</button>
        </form>
    </div>
);

GenericResource.propTypes = {
    title: string.isRequired,
    link: string.isRequired,
};

export default GenericResource;
