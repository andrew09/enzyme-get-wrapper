import React from 'react';

import getWrapper from '../get-wrapper';

describe('getWrapper', () => {
    it('should be a function of arity 1', () => {
        // Assert
        expect(getWrapper).toBeInstanceOf(Function);
        expect(getWrapper).toHaveLength(1);
    });

    it('should throw if not given a react class', () => {
        // Assert
        expect(() => getWrapper()).toThrow(
            'You must pass a valid React class to this function to receive an Enzyme wrapper.'
        );
    });

    it('should return a function', () => {
        // Arrange
        const ReactClass = class Test extends React.Component {
            render() {
                return <p>test</p>;
            }
        };

        // Assert
        expect(getWrapper(ReactClass)).toBeInstanceOf(Function);
    });
});
