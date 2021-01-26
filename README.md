# My Blog - React SSR (ExpressJs)

React Server Side Rendering demo project. 


## Getting Started


### Installing

First clone project and install dependencies

```sh
$ mkdir react-news && cd react-news
$ git clone https://github.com/mahinanasa/myblog.git
$ cd myblog
$ npm install
```



Find config.js in root folder and update backendUri.

```javascript
const config = {
  backendUrl: 'enter-your-api-url'
};
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3005](http://localhost:3005)

## Deployment

Deployment build

```sh
$ npm run build:prod
```


## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
