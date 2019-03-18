import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import FileIcon from '../src';
import ColorScheme from '../src/colorScheme';

storiesOf('FileIcon', module)
  .add('normal', () => {
    const extension = text('Extension', 'doc');
    const color = select('Color', ColorScheme, ColorScheme.blue);

    return (
      <div>
        <FileIcon extension={extension} colorScheme={color} smallest />
        <FileIcon extension={extension} colorScheme={color} small />
        <FileIcon extension={extension} colorScheme={color} medium />
        <FileIcon extension={extension} colorScheme={color} />
      </div>
    );
  })
  .add('linear-gradient', () => {
    const extension = text('Extension', 'doc');
    const color = select('Color', ColorScheme, ColorScheme.blue);

    return (
      <div>
        <FileIcon extension={extension} colorScheme={color} linearGradient smallest />
        <FileIcon extension={extension} colorScheme={color} linearGradient small />
        <FileIcon extension={extension} colorScheme={color} linearGradient medium />
        <FileIcon extension={extension} colorScheme={color} linearGradient />
      </div>
    );
  })
  .add('outline', () => {
    const extension = text('Extension', 'doc');
    const color = select('Color', ColorScheme, ColorScheme.blue);

    return (
      <div>
        <FileIcon extension={extension} colorScheme={color} outline smallest />
        <FileIcon extension={extension} colorScheme={color} outline small />
        <FileIcon extension={extension} colorScheme={color} outline medium />
        <FileIcon extension={extension} colorScheme={color} outline />
      </div>
    );
  });
