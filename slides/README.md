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

<div style="display: flex;align-items: flex-start; justify-content: space-around">
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

<div style="display: flex;align-items: flex-start; justify-content: space-around">
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

<!-- slide -->
# Demo

**TODO**

<!-- slide -->

# The problem

- Lots of repeating code
- Nothing is reusable

<!-- slide -->
# Dumb and Smart Components

<div class="compare">
    <div class="line fragment fade-in">
        <h3 class="title fragment fade-in">Dumb Components</h3>
        <h3 class="title fragment fade-in">Smart Components</h3>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                The "pretties"
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                The "brains"
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                How to present
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                What to present
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Do not run any business logic
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Do the stuff
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Contain only dumb
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Contain smart and dumb
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Have only props
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Have props and the state
            </div>
        </div>
    </div>
    <div class="line fragment fade-in">
        <div>
            <div class="fragment fade-in">
                Functional
            </div>
        </div>
        <div>
            <div class="fragment fade-in">
                Class
            </div>
        </div>
    </div>
</div>

<!-- slide -->

# Creating Dumb
