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
                        8+ as a technical trainer & developer
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
            <li>Experience with most of JS out there
                <ul>
                    <li>AngularJS, Angular, React, Node.js, etc..</li>
                </ul>
            </li>
            <li>Also Fluent in Android, .NET, Java, C++, Python</li>
            <li>Deep knowledge of Data Structures and Algorithms</li>
        </ul>
    </div>
    <div style="position: absolute; top: 10px; right: 100px; width: 35%">
        <div style="text-align: center">
            <img src="css/imgs/doncho-minkov.jpg" style="width: 100%; border: 1px solid #000; border-radius: 5px;"/>
        </div>
        <ul style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content:space-between">
            <li>
                <a href="https://github.com/minkov" target="_blank" class="icon github" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="https://bg.linkedin.com/in/donchominkov"  target="_blank" class="icon linkedin" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="https://www.hackerrank.com/DonchoMinkov"  target="_blank" class="icon hackerrank" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="https://leetcode.com/doncho/"  target="_blank" class="icon leetcode" style="margin-right: 15px"></a>
            </li>
            <li>
                <a href="mailto:donchominkov@gmail.com"  target="_blank" class="icon email"></a>
            </li>
            <li>
                <a href="http://minkov.it"  target="_blank" class="icon www"></a>
            </li>
        </ul>
    </div>
</div>


<!-- slide -->
# Table of contents

<ul>
    <li class="fragment fade-in">
        Types of components in React.js
    </li>
    <li class="fragment fade-in">
        Dumb and Smart components
    </li>
    <li class="fragment fade-in">
        Live demo
    </li>
</ul>

<!-- slide -->
# Components in React.js

<div style="display: flex; justify-content: space-between">
    <img style="width: 400px; height: 300px; border: 0; box-shadow: transparent 0 0 0" src="imgs/lego-1.png" class="fragment fade-in">
    <img style="width: 400px; height: 300px; border: 0; box-shadow: transparent 0 0 0" src="imgs/lego-2.png" class="fragment fade-in">
    <img style="width: 400px; height: 300px; border: 0; box-shadow: transparent 0 0 0" src="imgs/lego-3.jpg" class="fragment fade-in">
</div>

<div style="display: flex; justify-content: space-around">
    <img style="width: 400px; height: 400px; border: 0; box-shadow: transparent 0 0 0" src="imgs/lego-whole-2.jpeg" class="fragment fade-in">
    <img style="width: 600px; height: 400px; border: 0; box-shadow: transparent 0 0 0; border-radius: 5px;" src="imgs/lego-whole-1.jpg" class="fragment fade-in">
</div>

<!-- slide -->
# React Components

<h5 class=" fragment fade-in">Function Components</h5>
<div class="slide-columns columns-3 fragment fade-in">
	<div class="column-2">
		<pre><code data-no-escape>const Todo = (props) => (
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
);</code></pre>
</div>
<div class="column-1">
	<ul>
		<li class="fragment fade-in">
			Return only XML
		</li>
		<li class="fragment fade-in">
	        Use only props
		</li>
		<li class="fragment fade-in">
	        Like tags in HTML
		</li>
	</ul>
</div>
</div>

<h5 class="fragment fade-in">Class Components</h5>
<div class="slide-columns columns-3  fragment fade-in">
	<div class="column-1">
		<pre><code>class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: []};
	}
  
	render() {
		return ( /\* some code \*/)
	}
}</code></pre>
</div>
<div class="column-2">
	<ul>
		<li class="fragment fade-in">
			`render` method that return XML, based on state
		</li>
		<li class="fragment fade-in">
			Contain the state
		</li>
		<li class="fragment fade-in">
			Like tags in HTML, but with behavior
		</li>
	</ul>
</div>
</div>

<!-- slide {class="demo-slide"}-->
# Demo
## Create a simple listing of elements

<!-- slide {class="demo-slide"}-->
# Dumb and Smart Components

<!-- slide {style="font-size: 0.85em"} -->
# The Dumb Component

<ul>
    <li class="fragment fade-in">
        In most cases Dumb components are functional components
        <ul>
            <li class="fragment fade-in">
                Except when holding UI state or lifecycle handlers
            </li>
        </ul>
    </li>
    <li class="fragment fade-in">
        They have no control over the data
        <ul>
            <li class="fragment fade-in">
                They only visualize data and use callbacks from `props`
            </li>
        </ul>
    </li>
</ul>

<div class="fragment fade-in">

<pre><code>const Todo = ({id, isDone, text, onChange}) => (
	<label>
		<input type="checkbox" value={id} checked={isDone} onChange={onChange} />
	</label>
);</code></pre>
</div>
<div class="fragment fade-in">
<pre><code>const TodosList = ({todos, onTodoStateChanged}) => (
	<ul className="list">
		{
			todos.map(todo => (
				<li class="list-item">
					<Todo {...todo} onChange={onTodoStateChanged} />)
				</li>
			)
		}
	</ul>
);</code></pre>
</div>

<!-- slide -->

# The Smart Component

<ul>
	<li class="fragment fade-in">
		Smart components are always classes
	</li>
	<li class="fragment fade-in">
		They control the application
		<ul>
	<li class="fragment fade-in">
				Show other components and stuff
			</li>
		</ul>
	</li>
	<li class="fragment fade-in">
		They do not contain HTML tags
		<ul>
	<li class="fragment fade-in">
				Except `div`s for wrapping other components
			</li>
		</ul>
	</li>
</ul>

<div class="fragment fade-in">
<pre><code>class TodoApp extends Component {
	state = { todos: [] }
	handleTodoStateChanged(todo) { /\* handle it \*/ }
	render() {
		const { todos } = this.state;
		return (
			<div>
				<SiderBar />
				<TodosList todos={todos} onTodoStateChanged={this.handleTodoStateChanged} />
			</div>
		)
	}
}</code></pre>
</div>

<!-- slide -->
<div class="compare">
    <div class="line">
        <h3 class="title">Dumb Components</h3>
        <h3 class="title">Smart Components</h3>
    </div>
    <div class="line">
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
    <div class="line">
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
    <div class="line">
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
    <div class="line">
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
    <div class="line">
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
    <div class="line">
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
# Demo

- Creating application using the Dumb Smart principle
  1. List TODOs by filter (done, not done)
  2. Search TODOs by name
  3. Mark TODO as done or not done
  4. Create TODO


<!-- slide -->

# Demo and Slides

[Slides](https://cdn.rawgit.com/Minkov/dev-bg-smart-dumb-components/78d04b3e/slides/index.html)
[Demo](https://github.com/Minkov/dev-bg-smart-dumb-components)


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
    <div class="date">
        19-Sep-2018
    </div>
</div>
