export default ({ render, shallow, mount }, depth) => {
    const depths = {
        render,
        shallow,
        mount,
    };

    return depths[depth] || mount;
};
