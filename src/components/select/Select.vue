/* eslint-disable */
<template>
  <div class="vr-select-container">
    <div class="select-container" :name="id" :id="id">
      <slot name="trigger">
        <p>{{value && value.label}} Tippy Trigger</p>
      </slot>
    </div>
    <tippy :to="id" distant="0" trigger="click"
    interactive="true" theme="light" placement="bottom">
      <div v-for="option in options" :id="option.label"
        :key="option.label" @click="clicked(option)">
        {{option.label}}
      </div>
    </tippy>
  </div>
</template>

<script>
/* eslint-disable */
import { tippy } from "vue-tippy";
export default {
  name: "VrSelect",
  props: {
    msg: String,
    options: Array,
    value: Object
  },
  data() {
    return {
      id: `vrSelect${this._uid}`,
      instance: null,
    };
  },
  mounted() {
    // const button = document.querySelector(this.id);
    // const instance = tippy(button);

    const button = document.querySelector("#" + this.id);
    tippy(button);
    this.instance = button._tippy;
    console.log(this.instance, this.selected, this.value);
  },
  methods: {
    clicked(data) {
      console.log(data, this.selected);
      this.$emit('input', data);
      this.instance.hide();
    },
    onMount(data) {
      console.log(data, "onMount");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
import "tippy.js/themes/light.css";
<style scoped lang="scss">

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
