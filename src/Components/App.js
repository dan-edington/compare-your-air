import React, { useState, Fragment } from 'react'
import GlobalStyles from './GlobalStyles'
import { AppHeader, AppContainer, AppSearchArea } from './App-styles'
import SearchBox from './SearchBox/SearchBox'
import ResultList from './ResultList/ResultList'

function App() {
	const [cityData, setCityData] = useState({})
	const APIURL = 'https://api.openaq.org/v1/latest?limit=1'

	async function addCityDataToResults(city) {
		const response = await fetch(`${APIURL}&city=${city}`)
		const data = await response.json()
		setCityData({ ...cityData, [city]: data.results[0] })
	}

	function removeCityDataFromResults(city) {
		const newCityData = { ...cityData }
		delete newCityData[city]
		setCityData(newCityData)
	}

	function isCitySelected(city) {
		return cityData[city] ? true : false
	}

	return (
		<AppContainer>
			<GlobalStyles />
			<AppHeader>
				<h1>Compare your Air</h1>
				<p>Compare the air quality between cities in the UK.</p>
				<p>Select cities to compare using the search tool below.</p>
			</AppHeader>
			<AppSearchArea>
				<SearchBox
					addCityDataToResults={addCityDataToResults}
					isCitySelected={isCitySelected}
				/>
				<ResultList
					removeCityDataFromResults={removeCityDataFromResults}
					cityData={cityData}
				/>
			</AppSearchArea>
		</AppContainer>
	)
}

export default App
