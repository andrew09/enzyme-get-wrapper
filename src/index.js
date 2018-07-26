import getWrapper from './get-wrapper';
import isValidEnzymePackage from './is-valid-enzyme-package';

let enzyme;
export const configure = enzymePackage => (enzyme = enzymePackage);

export default (...rest) => {
    if (!enzyme)
        throw 'enzyme-get-wrapper expects to be configured and given your internal Enzyme package. If not already done, please install Enzyme (see http://airbnb.io/enzyme/docs/installation/index.html), and check our documentation on how to configure it with enzyme-get-package here: https://github.com/andrew09/enzyme-get-wrapper';

    if (!isValidEnzymePackage(enzyme))
        throw 'The provided Enzyme package is not valid.';

    return getWrapper(enzyme, ...rest);
};
