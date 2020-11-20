// import Vue from 'vue';
import VrSelect from './VrSelect.vue';

const components = {
  VrSelect,
};

// Object.keys(Components).forEach((name) => {
//   Vue.component(name, Components[name]);
// });

// export default Components;

// import * as components from './components'

const ComponentLibrary = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
