// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

//snapshot tests
test('Display renders correctly', () => {
    render(<Display />);
})

test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
})

