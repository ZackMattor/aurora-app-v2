# Aurora App

The Aurora Application. This can be used to manage and configure the Aurora Lighting System.

https://i.imgur.com/j1YcUT5

**This is part of the Aurora Lighting System**

[Aurora Firmware](https://github.com/ZackMattor/aurora-firmware)

[Aurora Home Hub](https://github.com/ZackMattor/aurora-home-hub)

[Aurora App](https://github.com/ZackMattor/aurora-app-v2)

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```
