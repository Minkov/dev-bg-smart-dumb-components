const Todo =
    (props) => (
        <label>
            <input
                type="checkbox"
                value={props.todo.id}
                checked={props.todo.isDone}
            />
            <span>
                {props.todo.text}
            </span>
        </label>
    );