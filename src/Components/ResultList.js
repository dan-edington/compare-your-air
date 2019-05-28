import React, { Fragment } from 'react'

function ResultList(props) {
	return <Fragment>{JSON.stringify(props.cities)}</Fragment>
}

export default ResultList
