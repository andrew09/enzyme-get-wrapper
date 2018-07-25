import { render, shallow, mount } from 'enzyme';

const DEPTHS = {
    render,
    shallow,
    mount,
};

export default depth => DEPTHS[depth] || mount;
