import styled from 'styled-components'

export const ResultListContainer = styled.div`
	width: 80%;
	margin-top: 3em;
	display: grid;
	grid-template-columns: 47% 47%;
	column-gap: 6%;

	@media (max-width: 900px) {
		display: block;
	}
`
