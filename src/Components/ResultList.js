import React from 'react'
import AirQualityCard from './AirQualityCard'

function ResultList(props) {
	return (
		<ul>
			{Object.keys(props.cityData).map((cityName, i) => (
				<li key={i}>
					<AirQualityCard
						city={cityName}
						removeCityDataFromResults={
							props.removeCityDataFromResults
						}
						cityData={props.cityData[cityName]}
					/>
				</li>
			))}
		</ul>
	)
}

export default ResultList
