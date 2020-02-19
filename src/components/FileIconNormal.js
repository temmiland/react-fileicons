import styled, { css } from 'styled-components';

const FileIconNormal = styled.div`
	position: relative;
	margin: 5px auto;
	width: 100px;
	height: 140px;
	border-radius: 8px;
	background: ${props => props.colorScheme.primary}
	font-family: 'Roboto', sans-serif;
	font-size: 24px;
	font-weight: 500;
	color: #fff;
	
	${props => props.smallest && css`
		width: 35px;
		height: 46px;
		border-radius: 4px;
		font-size: 9px;
	`}
	
	${props => props.small && css`
		width: 50px;
		height: 70px;
		border-radius: 4px;
		font-size: 11px;
	`}
	
	${props => props.medium && css`
		width: 75px;
		height: 105px;
		border-radius: 6px;
		font-size: 16px;
	`}
	
	&:before {
		position: absolute;
		top: 0;
		right: 0;
		border-width: 16px;
		border-bottom-left-radius: 8px;
		border-style: solid;
		border-color: ${p => p.background + ' ' + p.background
			+ ' rgba(255,255,255,.30) rgba(255,255,255,.30);'}
		content: "";
	
		${props => props.smallest && css`
			border-width: 6px;
			border-bottom-left-radius: 4px;
		`}
	
		${props => props.small && css`
			border-width: 8px;
			border-bottom-left-radius: 4px;
		`}
		
		${props => props.medium && css`
			border-width: 12px;
			border-bottom-left-radius: 6px;
		`}
	
	}

	&:after {
		position: absolute;
		bottom: 10px;
		left: 10px;
		content: "${props => props.extension.substring(0, 4)}";
	
		${props => props.smallest && css`
			left: 5px;
			bottom: 5px;
		`}

		${props => props.small && css`
			left: 8px;
			bottom: 8px;
		`}
	}
`;

export default FileIconNormal;
