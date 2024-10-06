# 0x05-react_state

## [state](https://www.taniarascia.com/getting-started-with-react/#state)

## [shouldComponentUpdate](https://www.youtube.com/watch?v=Fey52mT8Tbk)

## [Context](https://www.youtube.com/watch?v=d923SmVS3L8)

- [Context react Website](https://legacy.reactjs.org/docs/context.html)

way to pass data through components tree without having to pass props down manually at every level.
In a typical React application, data is passed top-down (parent to child) via props.

- Create a context

```js
const MyContext = React.createContext(defaultValue);
```

- Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

```js
<MyContext.Provider value={/* some value */}>
```

- A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

```js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```
