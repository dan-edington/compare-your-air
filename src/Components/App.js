import React, { Component, Fragment } from 'react'
import SearchBox from './SearchBox'

function App() {
	return (
		<Fragment>
			<header>
				<h1>Compare your Air</h1>
				<p>Compare the air quality between cities in the UK.</p>
				<p>Select cities to compare using the search tool below.</p>
			</header>
			<main>
				<SearchBox />
			</main>
		</Fragment>
	)
}

export default App
