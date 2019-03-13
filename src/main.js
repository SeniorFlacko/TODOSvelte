import App from './App.html';

var app = new App({
	target: document.querySelector('.todoapp'),
	data: {
		"name": "world"
	}
});

export default app;