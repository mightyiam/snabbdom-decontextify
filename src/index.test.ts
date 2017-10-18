import { test } from 'ava'
import { VNode } from 'snabbdom/vnode'
import decontextify from '.'

test((t) => {
  const vnode: VNode = {
    children: [
      {
        children: undefined,
        data: {},
        elm: {} as Node,
        key: 1234,
        sel: 'div#child-div.child-class',
        text: 'foo'
      }
    ] as VNode[],
    data: {},
    elm: {} as Node,
    key: 'bar',
    sel: 'div#text-div.text-class',
    text: 'kung'
  }

  const expectedVNode: VNode = {
    children: [
      {
        children: undefined,
        data: Object.create(null),
        elm: undefined,
        key: 1234,
        sel: 'div',
        text: 'foo'
      }
    ] as VNode[],
    data: Object.create(null),
    elm: undefined,
    key: 'bar',
    sel: 'div',
    text: 'kung'
  }

  const actualVNode: VNode = decontextify(vnode)

  t.deepEqual(actualVNode, expectedVNode)
})
