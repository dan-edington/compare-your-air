import React from 'react'
import { ResultListContainer } from './ResultList-styles'
import AirQualityCard from '../AirQualityCard/AirQualityCard'

function ResultList(props) {
	return (
		<ResultListContainer>
			{Object.keys(props.cityData).map((cityName, i) => (
				<AirQualityCard
					key={i}
					city={cityName}
					removeCityDataFromResults={props.removeCityDataFromResults}
					cityData={props.cityData[cityName]}
				/>
			))}
		</ResultListContainer>
	)
}

export default ResultList
