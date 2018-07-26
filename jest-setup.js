import 'raf/polyfill';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { configure } from './src';

enzyme.configure({ adapter: new Adapter() });
configure(enzyme);

window.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);

    return 0;
};
