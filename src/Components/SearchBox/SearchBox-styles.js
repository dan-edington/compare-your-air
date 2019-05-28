import styled from 'styled-components'
import searchImg from '../../assets/search.svg'

export const SearchInput = styled.input`
	position: relative;
	z-index: 10;
	border-radius: 10px;
	border: 2px solid #aaa;
	font-size: 1.2em;
	padding: 0.5em 0.5em 0.5em 2em;
	width: 25em;
	background-image: url(${searchImg});
	background-size: 1.3em;
	background-position: 0.25em 50%;
	background-repeat: no-repeat;
`

export const DropDown = styled.ul`
	display: block;
	width: 25em;
	background-color: white;
	font-size: 1.2em;
	position: relative;
	z-index: 9;
	border-radius: 0 0 10px 10px;
	padding-top: 15px;
	top: -20px;
	overflow: auto;
	max-height: 14em;
	height: ${props => (props.visible ? 'auto' : '0')};
	opacity: ${props => (props.visible ? '1' : '0')};

	li {
		color: black;
		cursor: pointer;
		padding: 0.8em;

		&:hover {
			background-color: #aaa;
			color: white;
		}
	}
`
