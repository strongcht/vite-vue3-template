/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import type { Directive, DirectiveBinding, VNode } from 'vue';
const example: Directive = {
  mounted: (el: Element, binding: DirectiveBinding, node: VNode) => {
    console.log(el, binding, node);
  }
};

export function setupDirectives(app: App) {
  app.directive('example', example);
}
