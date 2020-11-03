// HACK: Consistent import to match require at client side for Nuxt.js
import '../plugins/vue-stack-grid.client';
import '../plugins/ui-plugin.client';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
}