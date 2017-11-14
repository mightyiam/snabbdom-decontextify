import { test } from 'ava'
import { VNode } from 'snabbdom/vnode'
import decontextify from '.'

test((t) => {
  const input: VNode = {
    children: [
      {
        children: undefined,
        data: {},
        elm: {} as Node,
        key: 1234,
        sel: 'div#child-div.child-class',
        text: 'foo'
      },
      'string child'
    ],
    data: {},
    elm: {} as Node,
    key: 'bar',
    sel: 'div#text-div.text-class',
    text: 'kung'
  }

  const expected: VNode = {
    children: [
      {
        children: undefined,
        data: Object.create(null),
        elm: undefined,
        key: 1234,
        sel: 'div',
        text: 'foo'
      },
      'string child'
    ],
    data: Object.create(null),
    elm: undefined,
    key: 'bar',
    sel: 'div',
    text: 'kung'
  }

  const actual: VNode = decontextify(input)

  t.deepEqual(actual, expected)
})
