import styled, { css } from 'styled-components';
import FileIconNormal from './FileIconNormal';

const FileIconOutline = styled(FileIconNormal)`
  ${props => props.outline && css`
      width: 96px;
      height: 131px;
      background: none;
      border: 3px solid ${props.colorScheme.primary};
      
      &:before {
        top: -3px;
        right: -3px;
        border-color: #fff #fff ${props.colorScheme.primary} ${props.colorScheme.secondary};
        border-width: 18px;
      }
      
      &:after {
        bottom: 8px;
        left: 8px;
        color: ${props.colorScheme.secondary}
      }
  `}
`;

export default FileIconOutline;
