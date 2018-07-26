import React from 'react';

import isValidReactClass from '../is-valid-react-class';

const NOOP = () => null;

describe('isValidReactClass', () => {
    it('should be a function of arity 1', () => {
        // Assert
        expect(isValidReactClass).toBeInstanceOf(Function);
        expect(isValidReactClass).toHaveLength(1);
    });

    it('should return true if given a valid React class', () => {
        // Arrange
        const ReactClass = class Test extends React.Component {
            render() {
                return <p>test</p>;
            }
        };

        // Act
        const result = isValidReactClass(ReactClass);

        // Assert
        expect(result).toBe(true);
    });

    it('should return false if given nothing', () => {
        // Assert
        expect(isValidReactClass()).toBe(false);
    });

    it('should return false if given a string', () => {
        // Assert
        expect(isValidReactClass('')).toBe(false);
    });

    it('should return false if given an empty object', () => {
        // Assert
        expect(isValidReactClass({})).toBe(false);
    });

    it('should return false if given an array', () => {
        // Assert
        expect(isValidReactClass([])).toBe(false);
    });

    it('should return false if given a function', () => {
        // Assert
        expect(isValidReactClass(NOOP)).toBe(false);
    });
});
