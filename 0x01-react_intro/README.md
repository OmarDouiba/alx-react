# 0x01-react_intro

![image](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/79df527164ac54981039.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240625T110610Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=37c25502097d91a43cf40977dd836b2bd8c3af8c3b791bf29978e09a1557307c)

React is a JavaScript library that is highly popular and open-source, created by Facebook. It is used to build user interfaces (UI) on the frontend, serving as the View layer in an MVC (Model View Controller) application.

One of the key aspects of React is components. Components are reusable HTML elements.

### render() method

used to render DOM nodes.

```js
class App extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
```

we will use reactDom render() to render the app class into the root div

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

## Create React App

- npx create-react-app (app name)
- Ex:
  - npx create-react-app first-app

when we run this commend it will generate the initial project structer and install the dependencies, only files you need to build your app.

- Runs the app in development mode
  - npm start
- Runs the test watcher in an interactive mode.
  - npm test
- Builds the app for production to the build folder.
  - npm run build

## [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

Extension that allows you to inspect components as they written.

## JSX: JavaScript + XML

JSX is a powerful syntax extension for JavaScript that allows you to write HTML-like code in your React applications. While it is not required, it simplifies the process of creating React elements and makes your code more readable.

- JSX allows you to write HTML-like code in your JavaScript files.
- It enhances the readability and maintainability of your React components.
- JSX is more strict than HTML. For example, all tags must be properly closed.
- Under the hood, JSX gets compiled into React.createElement calls, which create the actual React elements.

```JS
const heading = <h1 className="site-heading">Hello, React</h1>
```

JSX is not mandatory for writting React, we can you DOM by calling createElement, which'll give us the same output

```js
const heading = React.createElement(
  "h1",
  { className: "site-heading" },
  "Hello, React!"
);
```

## Components

Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces that can be managed separately.

#### Types of Components

- Functional Components:
  - These are simple JavaScript functions that take props as an argument and return React elements.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Class Components:
  - These are ES6 classes that extend from React.Component and have a render method that returns React elements.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- How to Use Components

```js
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

## Props

## State
