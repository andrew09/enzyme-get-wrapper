import enzyme from 'enzyme';

import isValidEnzymePackage from '../is-valid-enzyme-package';

const NOOP = () => null;

describe('isValidEnzymePackage', () => {
    it('should be a function of arity 1', () => {
        // Assert
        expect(isValidEnzymePackage).toBeInstanceOf(Function);
        expect(isValidEnzymePackage).toHaveLength(1);
    });

    it('should return true when given package is valid enzyme package', () => {
        // Act
        const result = isValidEnzymePackage(enzyme);

        // Asser
        expect(result).toBe(true);
    });

    it('should return false if given nothing', () => {
        // Assert
        expect(isValidEnzymePackage()).toBe(false);
    });

    it('should return false if given a string', () => {
        // Act
        const result = isValidEnzymePackage('');

        // Asser
        expect(result).toBe(false);
    });

    it('should return false if given an empty object', () => {
        // Assert
        expect(isValidEnzymePackage({})).toBe(false);
    });

    it('should return false if given an array', () => {
        // Assert
        expect(isValidEnzymePackage([])).toBe(false);
    });

    it('should return false if given an array', () => {
        // Assert
        expect(isValidEnzymePackage(NOOP)).toBe(false);
    });
});
