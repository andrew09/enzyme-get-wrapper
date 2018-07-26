export default enzyme => {
    if (
        !(
            enzyme instanceof Object &&
            !(enzyme instanceof Array) &&
            !(enzyme instanceof Function)
        )
    )
        return false;

    if (!enzyme.render) return false;
    if (!enzyme.shallow) return false;
    if (!enzyme.mount) return false;

    return true;
};
