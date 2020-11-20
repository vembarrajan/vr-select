import Vue from 'vue';
import VrSelect from './VrSelect.vue';

const Components = {
  VrSelect,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
