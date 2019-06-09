import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Demo1 from './Demo@1';


storiesOf('Dialog', module)
  .add('Dialog Demo@1', () => 
    <Demo1 />
  );

