import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";

import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';

const title = "SPA - LeaderBoard";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h8k-navbar header={title}></h8k-navbar>
				<LeaderBoard />
			</div>
		</BrowserRouter>
	);
}

export default App;
