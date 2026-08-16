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
		// Forwarded as transient props ($-prefixed) so styled-components v6
		// keeps them out of the rendered DOM element.
		return (
			<FileIconContainer $size={ props.size }>
				<FileIconBase
					$extension={ props.extension }
					$colorScheme={ props.colorScheme }
					$iconStyle={ props.iconStyle }
					$size={ props.size }
					$background={ props.background }
					$fontSize={ props.fontSize }
				/>
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