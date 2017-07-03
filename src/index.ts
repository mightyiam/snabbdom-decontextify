import { selectorParser } from 'snabbdom-selector'
import { Key, VNode } from 'snabbdom/vnode'

const decontextify = (vnode: VNode): VNode => {
  return {
    children: vnode.children ? vnode.children.map(decontextify) : undefined,
    data: {},
    elm: undefined,
    key: '',
    sel: vnode.sel ? selectorParser(vnode).tagName : undefined,
    text: vnode.text
  }
}

export default decontextify
