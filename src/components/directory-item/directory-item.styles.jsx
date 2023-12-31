import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	transition: transform 0.6s ease-out;
`;

export const DirectoryItemBody = styled.div`
	height: 180px;
	padding: 0 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;

	h2 {
		font-weight: normal;
		margin: 10px 25px 0;
		font-size: xxx-large;
		color: #4a4a4a;
	}

	p {
		margin: 0.5em;
		font-size: x-large;
	}

	&:hover {
		opacity: 0.9;
	}
`;

export const DirectoryItemContainer = styled(Link)`
	min-width: 30%;
	height: 600px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&.large {
		height: 380px;
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	&:hover {
		cursor: pointer;
		${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		${DirectoryItemBody} {
			opacity: 0.9;
		}
	}
`;
