/* eslint-disable */
import Select from "./components/select/index.js";
import App from './App.vue';
import Vue from 'vue';

const components = {
  Select
};

components.install = (Vue, options = {}) => {
  for (const componentName in components) {
    const component = components[componentName];

    if (component && componentName !== "install") {
      Vue.component(component.name, component);
    }
  }
};

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});

export default components;
