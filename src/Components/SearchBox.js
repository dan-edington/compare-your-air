import React, { useState, useEffect, Fragment } from 'react'

function SearchBox(props) {
	const [cityList, setCityList] = useState([])
	const [filteredCities, setFilteredCities] = useState([])

	useEffect(() => {
		async function fetchCityList() {
			const response = await fetch(
				'https://api.openaq.org/v1/cities?country=GB&limit=10000'
			)
			const data = await response.json()
			setCityList(data.results.map(result => result.city))
		}

		fetchCityList()
	}, [])

	function filterCityList(e) {
		const inputVal = e.target.value.toLowerCase().trim()
		setFilteredCities(
			cityList.filter(el => {
				if (
					el.toLowerCase().indexOf(inputVal) === 0 &&
					inputVal !== ''
				) {
					return true
				}
			})
		)
	}

	function selectCity(e) {
		props.addCityDataToResults(e.target.dataset.city)
	}

	return (
		<Fragment>
			<input type="search" onChange={filterCityList} />
			<ul>
				{filteredCities.map((city, i) => (
					<li key={i} data-city={city} onClick={selectCity}>
						{city}
					</li>
				))}
			</ul>
		</Fragment>
	)
}

export default SearchBox
