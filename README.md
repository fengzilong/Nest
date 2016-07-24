# Nest [![npm package](https://img.shields.io/npm/v/nest-ui.svg?style=flat-square)](https://www.npmjs.org/package/nest-ui)

> Yet another UI framework for Web, built with riot

## Demo

https://fengzilong.github.io/Nest/

## Docs

coming soon...

## Installation

```bash
$ npm i nest-ui --save
```

## Usage

include nest-ui css file via `<link>`

```html
<link rel="stylesheet" href="https://npmcdn.com/nest-ui/dist/nest.css">
```

include [riot](https://github.com/riot/riot) via `<script>`

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/riot/2.4.1/riot.min.js"></script>
```

enjoy :)

index.html

```html
<html>
	<head>
		<title>example</title>
		<link rel="stylesheet" href="https://npmcdn.com/nest-ui/dist/nest.css">
	</head>
	<body>
		<app></app>

		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/riot/2.4.1/riot.min.js"></script>
		<script type="text/javascript" src="./app.js"></script>
	</body>
</html>
<app></app>
```

app.js

```js
// you can also include nest-ui via `script`
import 'nest-ui';

riot.tag('app', `
	<ui-button on-click="{ onClick }">click me</ui-button>
`, opts => {
	this.onClick = () => {
		console.log( 'button clicked' );
	}
});

riot.mount('*');
```

## License

MIT &copy; [fengzilong](https://github.com/fengzilong)
