import React from 'react'
import { AirQualityCardContainer } from './AirQualityCard-styles'

function AirQualityCard(props) {
	const data = props.cityData

	function calculateLastUpdatedTime() {
		const lastUpdated = data.measurements[0].lastUpdated
		const hour = 60 * 60 * 1000
		const day = hour * 24
		const week = day * 7

		const updatedDate = new Date(lastUpdated).getTime()
		const now = new Date().getTime()
		const timeDifference = now - updatedDate

		const hours = Math.floor(timeDifference / hour)
		const days = Math.floor(timeDifference / day)
		const weeks = Math.floor(timeDifference / week)

		if (hours < 24 && hours > 1) {
			return `${hours} HOURS AGO`
		} else if (hours < 24 && hours <= 1) {
			return `AN HOUR AGO`
		} else if (hours >= 24 && hours < 48) {
			return `${days} DAY AGO`
		} else if (hours > 24 && weeks < 1) {
			return `${days} DAYS AGO`
		} else if (weeks === 1) {
			return `${weeks} WEEK AGO`
		} else if (weeks > 1) {
			return `${weeks} WEEKS AGO`
		}
	}

	function parseValues() {
		return data.measurements
			.map(measurement => {
				return `${measurement.parameter.toUpperCase()}: ${
					measurement.value
				}`
			})
			.join(', ')
	}

	function removeCard(e) {
		props.removeCityDataFromResults(e.target.dataset.city)
	}

	return (
		<AirQualityCardContainer>
			<button data-city={escape(data.city)} onClick={removeCard}>
				Remove
			</button>
			<p className="updated">UPDATED {calculateLastUpdatedTime()}</p>
			<h2>{data.location}</h2>
			<p className="city">
				in {data.city}, {data.country}
			</p>
			<p className="values">Values: {parseValues()} </p>
		</AirQualityCardContainer>
	)
}

export default AirQualityCard
