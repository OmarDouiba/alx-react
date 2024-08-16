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

#### 2-Modifying Data:

```js
const newList = myList.push(4); // Returns a new List
const newMap = myMap.set("c", 3); // Returns a new Map
```

## Differences Between List and Map

### List:

- An ordered collection of values.
- Similar to an array in JavaScript.
- Supports methods like push, pop, shift, unshift, get, set, and delete.

```js
const list = List([1, 2, 3]);
```

### Map:

- A collection of key-value pairs, where keys are unique.
- Similar to an object in JavaScript.
- Supports methods like get, set, delete, and merge.

```js
const map = Map({ a: 1, b: 2 });
```

## How to Use Merge, Concat, and Deep Merging

### Merge:

Combines two or more Map objects, with the values from the last Map taking precedence in case of key conflicts.

```js
const map1 = Map({ a: 1, b: 2 });
const map2 = Map({ b: 3, c: 4 });
const mergedMap = map1.merge(map2); // { a: 1, b: 3, c: 4 }
```

### Concat:

Combines two or more List objects, appending the values from each list in order.

```js
const list1 = List([1, 2]);
const list2 = List([3, 4]);
const concatenatedList = list1.concat(list2); // [1, 2, 3, 4]
```

### Deep Merging:

Similar to merge, but it recursively merges nested structures.

```js
const deepMap1 = Map({ a: Map({ x: 1 }) });
const deepMap2 = Map({ a: Map({ y: 2 }) });
const deepMergedMap = deepMap1.mergeDeep(deepMap2); // { a: { x: 1, y: 2 } }
```

## What Is a Lazy Seq?

### Lazy Seq:

- Seq is a type provided by Immutable.js that allows for lazy evaluation, meaning that the operations on the data structure (e.g., map, filter) are not executed until they are needed.
- Lazy evaluation can lead to performance improvements, especially with large data sets, because only the necessary computations are performed.

```js
const seq = Seq([1, 2, 3]).map((x) => x * 2);
// seq is not evaluated yet
console.log(seq.toArray()); // [2, 4, 6] - now it's evaluated
```
