import React, { useState, useEffect, Fragment } from 'react'
import { SearchInput, DropDown } from './SearchBox-styles'

function SearchBox(props) {
	const [cityList, setCityList] = useState([])
	const [filteredCities, setFilteredCities] = useState([])
	const [dropDownVisible, setDropDownVisible] = useState(false)
	let searchRef = React.createRef()

	useEffect(() => {
		async function fetchCityList() {
			const response = await fetch(
				'https://api.openaq.org/v1/cities?country=GB&limit=10000'
			)
			const data = await response.json()
			setCityList(data.results.map(result => escape(result.city)))
		}

		fetchCityList()
	}, [])

	function filterCityList(e) {
		const inputVal = e.target.value.toLowerCase().trim()
		setFilteredCities(
			cityList.filter(el => {
				if (
					el.toLowerCase().indexOf(inputVal) === 0 &&
					inputVal !== '' &&
					!props.isCitySelected(el)
				) {
					return true
				}
			})
		)
	}

	function selectCity(e) {
		console.log(e.target.dataset.city)
		props.addCityDataToResults(e.target.dataset.city)
		searchRef.current.value = ''
		setFilteredCities([])
	}

	function hideDropDown() {
		setDropDownVisible(false)
	}

	function showDropDown() {
		setDropDownVisible(true)
	}

	return (
		<Fragment>
			<SearchInput
				ref={searchRef}
				type="search"
				onBlur={hideDropDown}
				onFocus={showDropDown}
				onChange={filterCityList}
			/>
			<DropDown visible={dropDownVisible}>
				{filteredCities.map((city, i) => (
					<li key={i} data-city={city} onMouseDown={selectCity}>
						{unescape(city)}
					</li>
				))}
			</DropDown>
		</Fragment>
	)
}

export default SearchBox
