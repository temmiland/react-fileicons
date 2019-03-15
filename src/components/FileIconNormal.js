import styled, { css } from 'styled-components';

const FileIconNormal = styled.div`
  position: relative;
  margin: 5px;
  width: 100px;
  height: 140px;
  border-radius: 8px;
  background: ${props => props.colorScheme.primary}
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  
  ${props => props.small && css`
    width: 50px;
    height: 70px;
    border-radius: 4px;
    font-size: 13px;
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
    border-color: #fff #fff rgba(255,255,255,.30) rgba(255,255,255,.30);
    content: "";
    
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
    content: "${props => props.extension.substring(0, 5)}"
  }
`;

export default FileIconNormal;
