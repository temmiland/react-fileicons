import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import FileIcon from '../src';
import ColorScheme from '../src/colorScheme';


storiesOf('FileIcon', module)
  .add('normal', () => {
    const extension = text('Extension:', 'doc');
    const color = select('Color', ColorScheme, ColorScheme.blue);

    return (
      <React.Fragment>
        <FileIcon extension={extension} colorScheme={color} />
        <FileIcon extension={extension} colorScheme={color} />
        <FileIcon extension={extension} colorScheme={color} />
      </React.Fragment>
    );
  })
  .add('linear-gradient', () => {
    const extension = text('Extension:', 'doc');
    const color = select('Color', ColorScheme, ColorScheme.blue);

    return (
      <React.Fragment>
        <FileIcon extension={extension} colorScheme={color} linearGradient />
        <FileIcon extension={extension} colorScheme={color} linearGradient />
        <FileIcon extension={extension} colorScheme={color} linearGradient />
      </React.Fragment>
    );
  })
  .add('outlines', () => {
    const extension = text('Extension:', 'doc');
    const color = select('Color', ColorScheme, ColorScheme.blue);

    return (
      <React.Fragment>
        <FileIcon extension={extension} colorScheme={color} outline />
        <FileIcon extension={extension} colorScheme={color} outline />
        <FileIcon extension={extension} colorScheme={color} outline />
      </React.Fragment>
    );
  });
