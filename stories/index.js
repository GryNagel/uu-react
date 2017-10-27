import React from 'react';
import { storiesOf } from '@storybook/react';
import Headers from '../src/components/headers';
import {Button, Icon} from 'react-materialize'

storiesOf('Headers', module)
    .add('H1-H6', () => (
       <Headers />
    ));

storiesOf('Buttons', module)
    .add('Button', () => (
        <Button onClick={action('clicked')} waves='light'>button</Button>
    ))
    .add('Button with icon left', () => (
            <Button onClick={action('clicked')} waves='light'>button<Icon left>cloud</Icon></Button>
    ))
    .add('Button with icon right', () => (
            <Button onClick={action('clicked')} waves='light'>button<Icon right>cloud</Icon></Button>
    ));
