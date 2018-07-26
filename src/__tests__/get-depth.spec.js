import enzyme from 'enzyme';

import getDepth from '../get-depth';

describe('getDepth', () => {
    it('should be a function of arity 2', () => {
        // Assert
        expect(getDepth).toBeInstanceOf(Function);
        expect(getDepth).toHaveLength(2);
    });

    it('should return a function if given "mount"', () => {
        // Assert
        expect(getDepth(enzyme, 'mount')).toBeInstanceOf(Function);
    });

    it('should return a function if given "shallow"', () => {
        // Assert
        expect(getDepth(enzyme, 'shallow')).toBeInstanceOf(Function);
    });

    it('should return a function if given "render"', () => {
        // Assert
        expect(getDepth(enzyme, 'render')).toBeInstanceOf(Function);
    });

    it('should return a function if given an invalid depth', () => {
        // Assert
        expect(getDepth(enzyme, 'invalid')).toBeInstanceOf(Function);
    });

    it('should return a function if given an object instead of a valid depth', () => {
        // Assert
        expect(getDepth(enzyme, { test: 'test' })).toBeInstanceOf(Function);
        expect(getDepth(enzyme, ['mount'])).toBeInstanceOf(Function);
    });

    it('should return a function if given a function instead of a valid depth', () => {
        // Assert
        expect(getDepth(enzyme, () => null)).toBeInstanceOf(Function);
    });
});
