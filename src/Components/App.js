import React, { useState, Fragment } from 'react'
import SearchBox from './SearchBox'
import ResultList from './ResultList'

function App() {
	const [cityData, setCityData] = useState({})
	const APIURL = 'https://api.openaq.org/v1/latest?limit=1'

	async function addCityDataToResults(city) {
		const response = await fetch(`${APIURL}&city=${city}`)
		const data = await response.json()
		setCityData({ ...cityData, [city]: data.results[0] })
	}

	function removeCityDataFromResults(city) {}

	return (
		<Fragment>
			<header>
				<h1>Compare your Air</h1>
				<p>Compare the air quality between cities in the UK.</p>
				<p>Select cities to compare using the search tool below.</p>
			</header>
			<main>
				<SearchBox addCityDataToResults={addCityDataToResults} />
				<ResultList
					removeCityDataFromResults={removeCityDataFromResults}
					cities={cityData}
				/>
			</main>
		</Fragment>
	)
}

export default App
