# snabbdom-decontextify [![Build Status](https://travis-ci.org/yarom82/snabbdom-decontextify.svg?branch=master)](https://travis-ci.org/yarom82/snabbdom-decontextify) [![codecov](https://codecov.io/gh/yarom82/snabbdom-decontextify/branch/master/graph/badge.svg)](https://codecov.io/gh/yarom82/snabbdom-decontextify) [![style code](https://img.shields.io/badge/code%20style-tslint-green.svg)](https://palantir.github.io/tslint/) 

## `decontextify(vnode: VNode) => VNode`

Returns a clone of the provided `VNode` without context.

This meens only `sel` (only `tagName`), `text` and `children`.

See test for example.
