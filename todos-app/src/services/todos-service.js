const TODOS_KEY = 'todos-key';
const findByIdFunc = id => todo => todo.id === id;

class TodosService {
    constructor() {
        this.storage = localStorage;
    }

    async getAll() {
        return JSON.parse(this.storage.getItem(TODOS_KEY) || '[]');
    }

    async getById(id) {
        const todos = await this.getAll();
        return todos.find(findByIdFunc(id));
    }

    async update(todo) {
        const todos = await this.getAll();
        const index = todos.findIndex(findByIdFunc(todo.id));
        todos[index].isDone = !todos[index].isDone;
        this._updateStorage(todos);
    }

    async add(todo) {
        const todos = await this.getAll();
        const id = Math.max(todos.map(t => t.id)) + 1;
        const { text } = todo;
        todos.push({ id, text });
        this._updateStorage(todos);
    }

    async _updateStorage(todos) {
        this.storage.setItem(TODOS_KEY, JSON.stringify(todos));
    }
}

const get = () => new TodosService();

export {
    get,
};
