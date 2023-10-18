import React from 'react';
import etsy from './etsy.json'
import './App.css';
import Listing from './listing';

const json = JSON.parse(JSON.stringify(etsy))



function App() {
	return (
		<div className="App">
			<Listing items={json} />
		</div>
	);
}

export default App;
