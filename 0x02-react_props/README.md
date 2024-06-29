# 0x02-react_props

## 5- Props

- Props stands for properties
- Props are like Html attributes (name="value")
- they can pass data from a parent components to is child components

```js
App // parent
<Header title="hello world"> // child

// Header component
// we can access title inside header Component
<header>{props.title}</header>
```

- It' like

```js
props = {
    title:"hello world",
    age: 40
}
App // parent
<Header title="hello world" age="40"> // child

// Header component
// we can access title inside header Component
<header>{props.title} {props.age}</header>
```
