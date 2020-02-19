import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import FileIconNormal from './components/FileIconNormal';
import FileIconLinearGradient from './components/FileIconLinearGradient';
import FileIconOutline from './components/FileIconOutline';
import ColorScheme from './ColorScheme';

class FileIcon extends React.PureComponent {
	render() {
		const { props } = this;
		return (
			props.outline
				? <FileIconOutline {...props} />
				: props.linearGradient
					? <FileIconLinearGradient {...props} />
					: <FileIconNormal {...props} />
		);
	}
}

FileIcon.defaultProps = {
	linearGradient: false,
	outline: false,
	smallest: false,
	small: false,
	medium: false,
	background: '#fff'
};

FileIcon.propTypes = {
	extension: PropTypes.string.isRequired,
	colorScheme: PropTypes.shape({
		primary: PropTypes.string.isRequired,
		secondary: PropTypes.string.isRequired
	}).isRequired,
	linearGradient: PropTypes.bool,
	outline: PropTypes.bool,
	smallest: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	background: PropTypes.string
};

export {
	ColorScheme,
	FileIcon as default
};
