import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import FileIcon, { IconStyle } from '../src';
import ColorScheme from '../src/ColorScheme';

storiesOf('FileIcon', module)
	.add('normal', () => {
		const extension = text('Extension', 'doc');
		const hexcode = text('Background', '#fff');
		const color = select('Color', ColorScheme, ColorScheme.blue);
		const size = number('Size', 100);
		const fontSize = number('Font size', null);

		return (
			<div>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.normal }
					background={ hexcode }
					size={ size }
					fontSize={ fontSize }
				/>
			</div>
		);
	})
	.add('linear-gradient', () => {
		const extension = text('Extension', 'doc');
		const hexcode = text('Background', '#fff');
		const color = select('Color', ColorScheme, ColorScheme.blue);
		const size = number('Size', 100);
		const fontSize = number('Font size', null);

		return (
			<div>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.gradient }
					background={ hexcode }
					size={ size }
					fontSize={ fontSize }
				/>
			</div>
		);
	})
	.add('outline', () => {
		const extension = text('Extension', 'doc');
		const hexcode = text('Background', '#fff');
		const color = select('Color', ColorScheme, ColorScheme.blue);
		const size = number('Size', 100);
		const fontSize = number('Font size', null);

		return (
			<div>
				<FileIcon
					extension={ extension }
					colorScheme={ color }
					iconStyle={ IconStyle.outline }
					background={ hexcode }
					size={ size }
					fontSize={ fontSize }
				/>
			</div>
		);
	});
