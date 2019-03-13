import React from 'react';

import { storiesOf } from '@storybook/react';
import FileIcon from '../src';
import ColorScheme from '../src/colorScheme';

storiesOf('FileIcon', module)
  .add('normal', () => <FileIcon extension="doc" colorScheme={ColorScheme.amber} />)
  .add('linear-gradient', () => <FileIcon extension="doc" colorScheme={ColorScheme.black} linearGradient />)
  .add('outlines', () => <FileIcon extension="doc" colorScheme={ColorScheme.blue} outline />);
