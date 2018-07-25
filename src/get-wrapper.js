import React from 'react';

import getDepth from './get-depth';
import getProps from './get-props';
import isValidReactClass from './is-valid-react-class';

export default (ReactClass, defaultProps = {}) => {
    if (!isValidReactClass(ReactClass))
        throw 'You must pass a valid React class to this function to receive an Enzyme wrapper.';

    return (config = {}) => {
        const depth = getDepth(config.depth);
        const props = getProps(defaultProps, config.props);

        return depth(<ReactClass {...props} />);
    };
};
