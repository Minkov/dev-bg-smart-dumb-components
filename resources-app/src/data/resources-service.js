import resourcesData from './resources-data';

const findByIdFunc = id => resource => resource.id === id;

class ResourcesService {
    constructor(resources) {
        this.resources = resources;
    }

    async getAll() {
        return this.resources;
    }

    async getById(id) {
        return this.resources.find(findByIdFunc(id));
    }

    async getPrevResource(resource) {
        const index = this.resources.findIndex(findByIdFunc(resource.id)) - 1;
        if (index < 0) {
            return null;
        }

        return this.resources[index];
    }

    async getNextResource(resource) {
        const index = this.resources.findIndex(findByIdFunc(resource.id)) + 1;
        if (index >= this.resources.length) {
            return null;
        }

        return this.resources[index];
    }
}

const get = () => new ResourcesService(resourcesData);

export {
    get,
};
