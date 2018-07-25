import getDepth from '../get-depth';

describe('getDepth', () => {
    it('should be a function of arity 1', () => {
        // Assert
        expect(getDepth).toBeInstanceOf(Function);
        expect(getDepth).toHaveLength(1);
    });

    it('should return a function if given "mount"', () => {
        // Assert
        expect(getDepth('mount')).toBeInstanceOf(Function);
    });

    it('should return a function if given "shallow"', () => {
        // Assert
        expect(getDepth('shallow')).toBeInstanceOf(Function);
    });

    it('should return a function if given "render"', () => {
        // Assert
        expect(getDepth('render')).toBeInstanceOf(Function);
    });

    it('should return a function if given an invalid depth', () => {
        // Assert
        expect(getDepth('invalid')).toBeInstanceOf(Function);
    });

    it('should return a function if given an object instead of a valid depth', () => {
        // Assert
        expect(getDepth({ test: 'test' })).toBeInstanceOf(Function);
        expect(getDepth(['mount'])).toBeInstanceOf(Function);
    });

    it('should return a function if given a function instead of a valid depth', () => {
        // Assert
        expect(getDepth(() => null)).toBeInstanceOf(Function);
    });
});
