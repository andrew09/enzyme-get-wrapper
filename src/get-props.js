export const propsAreValid = props => {
    if (
        !(
            props instanceof Object &&
            !(props instanceof Array) &&
            !(props instanceof Function)
        )
    )
        return false;

    return true;
};

export default (defaultProps, propOverrides = {}) => {
    if (!propsAreValid(defaultProps)) return {};
    if (!propsAreValid(propOverrides)) return defaultProps;

    return Object.assign({}, defaultProps, propOverrides);
};
