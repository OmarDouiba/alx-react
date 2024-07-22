# 0x00-Webpack

## JS Module Bundler

Module bundlers are tools frontend developed used to bundle JS module intp a single js file that can be executed in the browser.

- EX of modern module bundlers are: webpack, rollup, etc
-

## Bundle

File that contain all the modules your a

## install webpack

- npm init -y
- npm install webpack webpack-cli --save-dev

* webpack CLI (command line interface)
* --save-dev (development mode)

- we should add dev and build to package.json

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
},
```

- by default webpack create distination file as "./dist/file_name" as output point and use the "./src" as entry point.

## run the devlopment mode

- npm run dev

## install Html webpack plugin

- npm i --save-dev html-webpack-plugin

## Transpiling Modern JavaScript to ES5

- npm run dev -- --devtool inline-source-map

## To make code work in older browsers

- npm install babel-loader @babel/core @babel/preset-env --save-dev
- npm run dev -- --devtool inline-source-map

## Working with Styles

- npm install css-loader style-loader --save-dev

## Speed Up the Development Process with webpack-dev-server

- npm install webpack-dev-server --save-dev

## install jQuery 3

- npm install jquery@3.6.0

## start server and open browser

- npm install webpack webpack-cli webpack-dev-server open --save-dev

- then add to scripts in package.js
  ```js
  "start-dev": "webpack-dev-server --open"
  ```
