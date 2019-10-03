// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

//snapshot tests
test('Dashboard renders correctly', () => {
    render(<Dashboard />);
});

test('should match snapshot', () =>{
    expect(render(<Dashboard />)).toMatchSnapshot();
});

//mocking tests