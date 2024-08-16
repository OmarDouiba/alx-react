# 0x06-React_Immutable

## mmutable Objects: Who, What, When, Where, and Why?

### Who

Immutable objects are data structures that, once created, cannot be modified. This concept is heavily used in functional programming and is relevant to developers working with state management in JavaScript, particularly in frameworks like React.

### What

Immutable objects ensure that any modification results in a new object rather than altering the original. This helps prevent side effects, making your code more predictable and easier to debug.

### When

se immutable objects when you need to ensure that your data does not change after it has been created, such as when managing state in a React application or handling data that should remain constant throughout the application's lifecycle.

### Where

Immutable objects are used across various programming paradigms but are especially popular in functional programming and libraries like Redux in the JavaScript ecosystem.

### Why

Immutability helps in preventing unintended side effects and makes state management predictable. It leads to simpler and more maintainable code, as developers can reason more easily about the flow of data and the impact of changes.

#### 1-Creating Immutable Structures:

```js
const { List, Map } = require("immutable");

const myList = List([1, 2, 3]);
const myMap = Map({ a: 1, b: 2 });
```
