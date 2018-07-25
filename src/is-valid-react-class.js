export default ReactClass => {
    if (!(ReactClass instanceof Function)) return false;
    if (!ReactClass.prototype) return false;
    if (!ReactClass.prototype.isReactComponent) return false;

    return true;
};
