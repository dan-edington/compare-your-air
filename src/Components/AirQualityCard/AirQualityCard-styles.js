import styled from 'styled-components'
import closeBtn from '../../assets/close-button.svg'

export const AirQualityCardContainer = styled.article`
	width: 45%;
	float: left;
	background-color: white;
	color: black;
	border-radius: 10px;
	padding: 2em;
	position: relative;
	margin-bottom: 3em;

	&:nth-child(even) {
		float: right;
	}

	h2 {
		color: rgba(122, 54, 177, 1);
		font-size: 1.5em;
		font-weight: bold;
		padding-top: 0.5em;
	}

	p {
		padding: 1em 0em;

		&.updated,
		&.values {
			font-weight: bold;
			padding: 0;
		}
	}

	button {
		display: inline-block;
		border: none;
		padding: 0;
		margin: 0;
		width: 15px;
		height: 15px;
		text-decoration: none;
		background-image: url(${closeBtn});
		background-color: white;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: 1em;
		font-size: 1rem;
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		text-indent: -9999px;
		position: absolute;
		right: 15px;
		top: 15px;
	}
`
