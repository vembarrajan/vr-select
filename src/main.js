/* eslint-disable */
import VrSelect from "./components/VrSelect.vue";

const components = {
  VrSelect,
}

components.install = (Vue, options = {}) => {
  // Options
  // setOptions(Object.assign(config, options))

  for (const componentName in components) {
    const component = components[componentName]

    if (component && componentName !== 'install') {
      Vue.component(component.name, component)
    }
  }
}

export default components

// import Vue from 'vue';
// import App from './App.vue';
// Vue.config.productionTip = false;
// import VueTippy, { TippyComponent } from "vue-tippy";
// Vue.component("tippy", TippyComponent);

// Vue.use(VueTippy, {
//   directive: "tippy", // => v-tippy
//   flipDuration: 0,
//   popperOptions: {
//     modifiers: {
//       preventOverflow: {
//         enabled: false
//       }
//     }
//   }
// });
// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');
