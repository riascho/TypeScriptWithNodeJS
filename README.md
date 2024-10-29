# TypeScriptWithNodeJS

This is a very basic demo of using TypeScript for building a RESTful API with and Node and Express.

## Setup

- `npm init` to initialize `package.json`
- `tsc init` to initialize `tsconfig.json`

### Dev Dependencies `npm install --save-dev`

- `nodemon`
- `@types/node`
- `@types/express`

### Prod Dependencies `npm install --save`

- `express`
- `body-parser`

### tsconfig

- target: `es2018` or higher
- moduleResolution: `node`
- set `outDir` and `rootDir` to separate compilation

### package.json

- script: `"start": "nodemon dist/app.js"`

### Startup

Run `npm start` to start server.
