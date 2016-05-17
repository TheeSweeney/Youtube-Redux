import React from 'react';
import ReactDOM from 'react-dom';

//create a new component - should produce some html
const App = () => {//this is not actually an instance of "App" but rather a factory that has the ability to make more "Apps". This is a class, not an actual component
	return <div>Hi!</div>
}

//insert component's html into the page(DOM) 

ReactDOM.render(<App />, document.querySelector('.container'));;

//notes:
/*
only one component/class per file












*/