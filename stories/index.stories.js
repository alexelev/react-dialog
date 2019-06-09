import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Demo1 from './Demo@1';
import Demo2 from './Demo@2';


storiesOf('Dialog', module)
  .add('Dialog Demo@1', () => 
    <Demo1 />
  )
  .add("Dialog Demo@2", () => 
    <Demo2 />
  );

