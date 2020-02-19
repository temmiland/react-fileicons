import styled, { css } from 'styled-components';
import FileIconNormal from './FileIconNormal';

const FileIconLinearGradient = styled(FileIconNormal)`
	${props => props.linearGradient && css`
		background: linear-gradient(to bottom, ${props.colorScheme.primary} 0%, 
			${props.colorScheme.secondary} 100%);
	`}
`;

export default FileIconLinearGradient;
