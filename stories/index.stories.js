import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import FileIcon, { IconStyle } from '../src';
import ColorScheme from '../src/ColorScheme';

storiesOf('FileIcon', module)
	.add('normal', () => {
		const extension = text('Extension', 'doc');
		const color = select('Color', ColorScheme, ColorScheme.blue);

		return (
			<div>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.normal }
					size={ 30 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.normal }
					size={ 60 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.normal }
					size={ 90 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.normal }
					size={ 120 }
				/>
			</div>
		);
	})
	.add('linear-gradient', () => {
		const extension = text('Extension', 'doc');
		const color = select('Color', ColorScheme, ColorScheme.blue);

		return (
			<div>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.gradient }
					size={ 30 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.gradient }
					size={ 60 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.gradient }
					size={ 90 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.gradient }
					size={ 120 }
				/>
			</div>
		);
	})
	.add('outline', () => {
		const extension = text('Extension', 'doc');
		const color = select('Color', ColorScheme, ColorScheme.blue);

		return (
			<div>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.outline }
					size={ 30 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.outline }
					size={ 60 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.outline }
					size={ 90 }
				/>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.outline }
					size={ 120 }
				/>
			</div>
		);
	});
