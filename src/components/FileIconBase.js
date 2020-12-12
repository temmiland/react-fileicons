import styled from 'styled-components';
import IconStyle from '../IconStyle';

const FileIconBase = styled.div`
	position: relative;
	margin: 5px auto;
	width: ${props => props.iconStyle === IconStyle.outline ? '90%' : '100%'};
	height: ${props => props.iconStyle === IconStyle.outline ? '93%' : '100%'};
	border-radius: ${props => props.size / 100 * 12}px;
	border: ${props => props.iconStyle === IconStyle.outline
		? props => props.size / 100 * 5 + 'px solid ' + props.colorScheme.primary
		: 'auto'
};
	background: ${props => props.iconStyle === IconStyle.gradient
		? `linear-gradient(to bottom, ${props.colorScheme.primary} 0%, 
				${props.colorScheme.secondary} 100%)`
		: props.iconStyle === IconStyle.outline
			? 'none'
			: props.colorScheme.primary
};
	font-size: ${props => props.fontSize
		? props.fontSize / 100 * 25
		: props.size / 100 * 25
}px;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	color: ${props => props.iconStyle === IconStyle.outline
		? props.colorScheme.primary
		: '#fff'
};
	
	&:before {
		position: absolute;
		top: ${props => props.iconStyle === IconStyle.outline
		? props.size / 100 * -5 + 'px'
		: '0px'
};
			right: ${props => props.iconStyle === IconStyle.outline
		? props.size / 100 * -5 + 'px'
		: '0px'
};
		border-width: ${props => props.size / 100 * 20}px;
		border-bottom-left-radius: ${props => props.size / 100 * 6}px;
		border-style: solid;
		border-color: ${props => props.iconStyle === IconStyle.outline
		? props.background + ' ' + props.background + ' '
			+ props.colorScheme.primary + ' ' + props.colorScheme.secondary
		: props.background
			+ ' '
			+ props.background
			+ ' rgba(255,255,255,.30) rgba(255,255,255,.30)'
};
		content: "";
	
	}

	&:after {
		position: absolute;
		bottom: ${props => props.size / 100 * 10}px;
		left: ${props => props.size / 100 * 10}px;
		content: "${props => props.extension.substring(0, 5)}";
	}
`;

export default FileIconBase;
