# Getting Started

Super MEAN node mongodb and Angular 2 app Todo List using Auth0 JWT

## Get the Code
```
git clone https://github.com/thimico/node-mongodb-angular2-todo-auth.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

OR

```
npm install -g bower
bower install bootstrap

npm install -g nodemon
nodemon
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.