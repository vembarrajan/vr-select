/* eslint-disable */
import Button from "./components/button";
import Select from "./components/select";

const components = {
  Button,
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

export default components;
