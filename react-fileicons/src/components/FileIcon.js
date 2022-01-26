import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import FileIconBase from './FileIconBase';
import FileIconContainer from './FileIconContainer';
import ColorScheme from '../helpers/ColorScheme';
import IconStyle from '../helpers/IconStyle';

class FileIcon extends React.PureComponent {
	render() {
		const { props } = this;
		return (
			<FileIconContainer size={ props.size }>
				<FileIconBase { ...props } />
			</FileIconContainer>
		);
	}
}

FileIcon.defaultProps = {
	extension: 'js',
	colorScheme: ColorScheme.lightBlue,
	iconStyle: IconStyle.normal,
	size: 50,
	background: '#fff',
	fontSize: 0
};

FileIcon.propTypes = {
	extension: PropTypes.string.isRequired,
	colorScheme: PropTypes.shape({
		primary: PropTypes.string.isRequired,
		secondary: PropTypes.string.isRequired
	}).isRequired,
	iconStyle: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	background: PropTypes.string,
	fontSize: PropTypes.number
};

export default FileIcon;