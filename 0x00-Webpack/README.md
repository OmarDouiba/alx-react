# 0x00-Webpack

- webpack tool that alows us to minimize and optimize files for production

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

## run the devlopment mode

- npm run dev

## install Html webpack plugin

- npm i --save-dev html-webpack-plugin
