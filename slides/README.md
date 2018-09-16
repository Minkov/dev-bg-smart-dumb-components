<!-- slide {class="title-slide"} -->
<div class="title">
    <h1>Dumb and Smart Components In React.js</h1>
</div>

<div class="signature"> 
    <div class="author">
        <div class="image">
            <img src="css/imgs/doncho-minkov.jpg"/>
        </div>
        <div class="text">
            <strong>Doncho Minkov</strong>
            <div class="title-name">Senior full-stack developer</div>
            <div class="company">Software University</div>
        </div>
    </div>
    <div class="date">
        19-Sep-2018
    </div>
</div>

<!-- slide {class="who-am-i" style=""} -->
# Who am I?
<div style="display:flex;">
    <div style="">
        <h2>Doncho Minkov</h2>
        <ul>
            <li>
                Senior full-stack developer & trainer
                <ul>
                    <li>
                        @ Software University
                    </li>
                    <li>
                        ASP.NET Core & React.js
                    </li>
                </ul>
            </li>
            <li>
                15+ years in IT
                <ul>
                    <li>
                        8+ as a technical trainer
                    </li>
                    <li>
                        Front-end developer by heart
                        <ul>
                            <li>
                                Software developer by need
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Experience with all popular mobile platforms
                <ul>
                    <li>Android, iOS, Windows</li>
                </ul>
            </li>
            <li>Fluent in Android, Node.js, Angular, Java, C++</li>
            <li>Deep knowledge of Data Structures and Algorithms</li>
        </ul>
    </div>
    <div style="position: absolute; top: 10px; right: 100px; width: 35%">
        <div style="text-align: center">
            <img src="css/imgs/doncho-minkov.jpg" style="width: 100%; border: 0; border-radius: 5px;"/>
        </div>
        <ul style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content:space-between">
            <li>
                <a href="#" class="icon github" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="#" class="icon linkedin" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="#" class="icon hackerrank" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="#" class="icon leetcode" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="#" class="icon email"></a>
            </li>
            <li>
                <a href="#" class="icon www"></a>
            </li>
        </ul>
    </div>
</div>


<!-- slide -->
# Table of contents

**TODO**

<!-- slide -->

# Components in React.js


**TODO**
The lego pieces...

<!-- slide } -->
# Functional Components

```jsx
const Todo = (props) => (
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
```
<ul>
	<li class="fragment fade-in">
		Return XML
    </li>
    <li class="fragment fade-in">
        Use only props
    </li>
    <li class="fragment fade-in">
        Can contain other components
    </li>
    <li class="fragment fade-in">
        Like tags in HTML
    </li>
</ul>

<!-- slide -->
# Class Components

```jsx
class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: []};
	}
  
	render() {
		return ( /* some code */)
	}
}
```

<ul>
	<li class="fragment fade-in">
		Contain the state
	</li>
	<li class="fragment fade-in">
		Can contain other components
	</li>
	<li class="fragment fade-in">
		Like tags in HTML, but with behavior
	</li>
</ul>

<!-- slide {class="demo-slide"}-->
# Demo
## Create a simple listing of elements


<!-- slide -->

# The problem

- Lots of repeating code
- Nothing is reusable

<!-- slide -->

<div class="compare">
    <div class="line">
        <h3 class="title">Dumb Components</h3>
        <h3 class="title">Smart Components</h3>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                The **pretties**
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                The **brains**
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                **How** to present
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                **What** to present
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Run only **UI logic**
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Run **business logic**
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Have only **props** and **view state**
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Have only **data state**
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                **Reusable** from other components
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                **Reuse** dumb components
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Known as **Presentational**
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Known as **Containers**
            </div>
        </div>
    </div>
</div>

<!-- slide -->

# The Dumb Component

- In most cases Dumb components are functional components
  - Except when holding UI state or lifecycle handlers
- They have no control over the data
  - They only visualize data and call callbacks from `props`

```jsx
const Todo = ({id, isDone, text, onChange}) =>
	<label>
		<input type="checkbox" value={id} checked={isDone} onChange={onChange} />
		<span>
			{text}
		</span>
	</label>;
```

```jsx
const TodosList = ({todos, onTodoStateChanged}) =>
	<ul className="list">
		{todos.map(todo => <Todo {...todo} onChange={onTodoStateChanged} />)}
	</ul>;
```

<!-- slide -->

# The Smart Component

- Smart components are always classes
- They control the application
  - Show other components and stuff
- They do not contain HTML tags
  - Except `div`s for wrapping other components

```jsx
class TodoApp {
	state = {
		todos: []
	}

	/** fetch todos */

	handleTodoStateChanged(todo) {
		/* handle it */
	}

	render() {
		const { todos } = this.state;
		return (
			<div>
				<SiderBar />
				<TodosList
					todos={todos}
					onTodoStateChanged={this.handleTodoStateChanged} />
			</div>
		)
	}
}
```

<!-- slide -->
# Demo

- Creating application using the Dumb Smart principle
  1. List resources
  2. When a resource is clicked, show it in full screen
  3. When is full screen, show prev/next buttons

<br/>

**TODO: ** Insert picture


<!-- slide {class="title-slide"} -->
<div class="title">
    <h1>Questions</h1>
</div>

<div class="title">
	<h2>Dumb and Smart Components In React.js</h2>
</div>

<div class="signature"> 
    <div class="author">
        <div class="image">
            <img src="css/imgs/doncho-minkov.jpg"/>
        </div>
        <div class="text">
            <strong>Doncho Minkov</strong>
            <div class="title-name">Senior full-stack developer</div>
            <div class="company">Software University</div>
        </div>
    </div>
</div>