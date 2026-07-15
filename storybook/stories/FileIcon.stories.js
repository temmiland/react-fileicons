import FileIcon, { ColorScheme, IconStyle } from 'react-fileicons';

export default {
	title: 'react-fileicons/FileIcon',
	component: FileIcon,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: '`react-fileicons` is a simple and intuitive react component for visualizing file icons.'
			}
		}
	},
	argTypes: {
		extension: {
			name: 'extension',
			description: 'Extension',
			table: {
				type: {
					summary: 'string',
					detail: '<string>{0,5}'
				}
			}
		},
		colorScheme: {
			name: 'colorScheme',
			description: 'Color scheme',
			options: ColorScheme,
			control: { type: 'select' },
			table: {
				type: {
					summary: 'object',
					detail: '{ primary: "#039BE5", secondary: "#0288D1" } or ColorScheme.lightBlue'
				}
			}
		},
		iconStyle: {
			name: 'iconStyle',
			description: 'Icon style',
			options: IconStyle,
			control: { type: 'radio' },
			table: {
				type: {
					summary: 'string',
					detail: '[ normal | gradient | outline ] or IconStyle.normal'
				}
			}
		},
		size: {
			name: 'size',
			description: 'Size of the fileicon, autoscales font',
			control: { type: 'number' },
			table: {
				type: {
					summary: 'number',
					detail: '100'
				}
			}
		},
		background: {
			name: 'background',
			description: 'Background color behind the fileicon as hexcode',
			table: {
				type: {
					summary: 'string',
					detail: '#ffffff'
				}
			}
		},
		fontSize: {
			name: 'fontSize',
			description: 'Size of the font, optional parameter',
			control: { type: 'number' },
			table: {
				type: {
					summary: 'number',
					detail: '0'
				}
			}
		}
	}
};

export const Default = {
	args: {
		extension: 'js',
		colorScheme: ColorScheme.lightBlue,
		iconStyle: IconStyle.normal,
		size: 80,
		background: '#fff',
		fontSize: 0
	}
};
