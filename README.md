# enzyme-get-wrapper

A tool for creating flexible Enzyme wrappers with less code.

## Why?

There is a common pattern when using enzyme to test React components. People often create functions that take props, and then call enzyme’s `mount`, `shallow`, or `render` functions with their react component. This can get exhaustive when writing this same pattern in every test suite. Manually handling overriding the default props, errors when not passing your function at least an empty object (unless handled), and most commonly, rendering deeper than necessary for a lot of tests (doing a full enzyme mount when you may only need a render etc...). The flexibility and simplicity of this tool helps to alleviate some of these pain points.

## Installation

`yarn add enzyme-get-wrapper --dev`

OR

`npm install enzyme-get-wrapper -D`

## Usage

```javascript
import getWrapper from 'enzyme-get-wrapper';

import TestComponent from './test-component';

describe('the test', () => {
    const makeWrapper = getWrapper(TestComponent, { ...defaultProps });

    it('should pass the test', () => {
        // Arrange
        const wrapper = makeWrapper({
            depth: 'mount',
            props: {
                ...propsToPassToTestComponent,
            },
        });

        // Do things with wrapper
    });
});
```

## How it works

When giving the main exposed function a React class, and default props (optional), it returns a function that expects a config (optional). The config options are simple and as follows:

| option |  type  | default |
| ------ | :----: | :-----: |
| depth  | string | `mount` |
| props  | object |  `{}`   |

The returned function when called, returns you an enzyme wrapper to use as you normally would with enzyme.

## License

MIT
