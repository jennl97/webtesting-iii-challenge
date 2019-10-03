// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

//snapshot tests
test('Controls renders correctly', () => {
    const locked = jest.fn();
    const closed = jest.fn();

    render(<Controls 
        locked={locked}
        closed={closed}
        // toggleLocked={this.toggleLocked}
        // toggleClosed={this.toggleClosed}
    />);
});

test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

//mocking test
test('locked functions are called on button clicks', () => {
    const locked = jest.fn();
    const closed = jest.fn();

    const { getByText } = render(
        <Controls 
            locked={locked}
            closed={closed}
            // toggleLocked={this.toggleLocked}
            // toggleClosed={this.toggleClosed}
    />
    );

    getByText(/locked gate/i);
    getByText(/unlocked gate/i);

    const lockedGateButton = getByText(/locked gate/i);
    const unlockedGateButton = getByText(/unlocked gate/i);

    fireEvent.click(unlockedGateButton);
    fireEvent.click(lockedGateButton);

    expect(locked).toHaveBeenCalled();
    expect(unlocked).toHaveBeenCalled();
})
