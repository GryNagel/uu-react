import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Headers from '../src/components/headers';
import Form from '../src/components/form';
import Text from '../src/components/text';
import Contrast from '../src/components/contrast'

storiesOf('Text', module)
    .add('Headings', () => (
       <Headers />
    ))
    .add('Basic text', () => (
        <Text/>
    ))
    .add('Contrast', () => (
        <Contrast/>
    ));



storiesOf('Forms', module)
    .add('Basic form', () => (
        <Form />
    ));