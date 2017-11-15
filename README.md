# snabbdom-decontextify
[![Build Status](https://travis-ci.org/yarom82/snabbdom-decontextify.svg?branch=master)](https://travis-ci.org/yarom82/snabbdom-decontextify)
[![codecov](https://codecov.io/gh/yarom82/snabbdom-decontextify/branch/master/graph/badge.svg)](https://codecov.io/gh/yarom82/snabbdom-decontextify)

## `decontextify(vnode: VNode) => VNode`

Returns a clone of the provided `VNode` tree, that has no *context*.

A `VNode` that has no context (decontextified) has only

- `sel`; only the `tagName` part.
- `key`
- `text`
- `children` and the same for the children, recursively.

See test for example.
