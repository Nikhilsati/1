import React from 'react';
import Header from './Component/header/header.jsx';
import Background from './Component/background/Background';
import Bottom from './Component/bottom/Bottom';
import Footer from './Component/footer/Footer.jsx';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Background />
			<Bottom />
			<Footer />
		</div>
	);
}

export default App;
