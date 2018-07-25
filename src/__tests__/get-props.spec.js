import getProps, { propsAreValid } from '../get-props';

const NOOP = () => null;

describe('getProps', () => {
    it('should be a function of arity 1', () => {
        // Assert
        expect(getProps).toBeInstanceOf(Function);
        expect(getProps).toHaveLength(1);
    });

    it('should return an object', () => {
        // Act
        const result = getProps({ id: 1 });

        // Assert
        expect(result).toBeInstanceOf(Object);
    });

    it('should return an empty object if not given default props', () => {
        // Act
        const result = getProps();

        // Assert
        expect(result).toBeInstanceOf(Object);
        expect(result).not.toBeInstanceOf(Array);
        expect(Object.keys(result).length).toEqual(0);
    });

    it('should return an empty object if given default props as an array', () => {
        // Act
        const result = getProps(['test 1', 'test 2']);

        // Assert
        expect(result).toBeInstanceOf(Object);
        expect(result).not.toBeInstanceOf(Array);
        expect(Object.keys(result).length).toEqual(0);
    });

    it('should return an empty object if given default props as a string', () => {
        // Act
        const result = getProps('test');

        // Assert
        expect(result).toBeInstanceOf(Object);
        expect(result).not.toBeInstanceOf(Array);
        expect(Object.keys(result).length).toEqual(0);
    });

    it('should return an empty object if given default props as a function', () => {
        // Act
        const result = getProps(NOOP);

        // Assert
        expect(result).toBeInstanceOf(Object);
        expect(result).not.toBeInstanceOf(Array);
        expect(Object.keys(result).length).toEqual(0);
    });

    it('should return default props if not given any prop overrides', () => {
        // Arrange
        const defaultProps = {
            key1: 'value1',
            key2: 'value2',
        };

        // Act
        const result = getProps(defaultProps);

        // Assert
        expect(result).toEqual(defaultProps);
    });

    it('should return default props if given prop overrides as an array', () => {
        // Arrange
        const defaultProps = {
            key1: 'value1',
            key2: 'value2',
        };

        // Act
        const result = getProps(defaultProps, ['test 1', 'test 2']);

        // Assert
        expect(result).toEqual(defaultProps);
    });

    it('should return default props if given prop overrides as a string', () => {
        // Arrange
        const defaultProps = {
            key1: 'value1',
            key2: 'value2',
        };

        // Act
        const result = getProps(defaultProps, 'string');

        // Assert
        expect(result).toEqual(defaultProps);
    });

    it('should return default props if given prop overrides as a function', () => {
        // Arrange
        const defaultProps = {
            key1: 'value1',
            key2: 'value2',
        };

        // Act
        const result = getProps(defaultProps, NOOP);

        // Assert
        expect(result).toEqual(defaultProps);
    });

    it('should merge the default props and prop overrides together', () => {
        // Arrange
        const defaultProps = {
            default1: 'default1',
            default2: 'default2',
            default3: 'default3',
        };
        const propOverrides = {
            default1: 'override1',
            default2: 'override2',
        };
        const expectedResult = {
            default1: 'override1',
            default2: 'override2',
            default3: 'default3',
        };

        // Act
        const result = getProps(defaultProps, propOverrides);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});

describe('propsAreValid', () => {
    it('should be a function of arity 1', () => {
        // Assert
        expect(propsAreValid).toBeInstanceOf(Function);
        expect(propsAreValid).toHaveLength(1);
    });

    it('should return true if given an empty object', () => {
        // Assert
        expect(propsAreValid({})).toBe(true);
    });

    it('should return true if given a populated object', () => {
        // Assert
        expect(propsAreValid({ test: true })).toBe(true);
    });

    it('should return false if not given any props', () => {
        // Assert
        expect(propsAreValid()).toBe(false);
    });

    it('should return false if given an array', () => {
        // Assert
        expect(propsAreValid([])).toBe(false);
    });

    it('should return false if given a string', () => {
        // Assert
        expect(propsAreValid('')).toBe(false);
    });

    it('should return false if given a function', () => {
        // Assert
        expect(propsAreValid(NOOP)).toBe(false);
    });
});
