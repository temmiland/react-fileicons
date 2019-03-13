import styled from 'styled-components';

const FileIconNormal = styled.div`
  position: absolute;
  width: 100px;
  height: 135px;
  border-radius: 8px;
  background: ${props => props.colorScheme.primary}
  
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    border-width: 16px;
    border-bottom-left-radius: 8px;
    border-style: solid;
    border-color: #fff #fff rgba(255,255,255,.30) rgba(255,255,255,.30);
    content: "";
  }

  &:after {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    content: "${props => props.extension}"
  }
`;

export default FileIconNormal;
