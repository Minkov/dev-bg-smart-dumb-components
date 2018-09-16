import React, { Component } from 'react';
import ResourcesList from './resources-list';
import ResourcesSlider from './resources-slider';
import { get as getService } from '../data/resources-service';

class ResourcesApp extends Component {
    constructor() {
        super();
        this.service = getService();
        this.state = {
            currentResource: null,
            prevResource: null,
            nextResource: null,
            resources: [],
            isInSlider: false,
        };

        this.handleResourceClick = this.handleResourceClick.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    async componentWillMount() {
        const resources = await this.service.getAll();
        this.setState({ resources });
    }

    async handleResourceClick(id) {
        const isInSlider = true;

        const currentResource = await this.service.getById(id);
        const prevResource = await this.service.getPrevResource(currentResource);
        const nextResource = await this.service.getNextResource(currentResource);

        this.setState({ currentResource, prevResource, nextResource, isInSlider });
    }

    async handlePrev(event) {
        event.preventDefault();
        let { currentResource, prevResource, nextResource } = this.state;
        [ currentResource, nextResource ] = [ prevResource, currentResource ];
        prevResource = await this.service.getPrevResource(currentResource);
        this.setState({ currentResource, prevResource, nextResource });
    }

    async handleNext(event) {
        event.preventDefault();
        let { currentResource, prevResource, nextResource } = this.state;
        [ prevResource, currentResource ] = [ currentResource, nextResource ];
        nextResource = await this.service.getNextResource(currentResource);
        this.setState({ currentResource, prevResource, nextResource });
    }

    renderList() {
        const { resources } = this.state;

        return (
            <ResourcesList
              onResourceClick={this.handleResourceClick}
              resources={resources}
            />
        );
    }

    renderSlider() {
        const { isInSlider, currentResource, prevResource, nextResource } = this.state;
        if (!isInSlider) {
            return null;
        }

        const hideOverlay = () => {
            this.setState({ isInSlider: false });
        };

        return (
            <ResourcesSlider
              resource={currentResource}
              nextResource={nextResource}
              prevResource={prevResource}
              handlePrev={this.handlePrev}
              handleNext={this.handleNext}
              onClose={hideOverlay}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderList()}
                {this.renderSlider()}
            </div>
        );
    }
}

export default ResourcesApp;
