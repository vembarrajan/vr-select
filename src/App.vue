<template>
  <div id="app" style="height: 100vh">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to vr-select component" />
    <VrSelect :options="[{ label: '1', label: '3' }]" v-model="selected">
      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    </VrSelect>
    <vr-select
      v-model="selected"
      :options="[
        { label: 'asb', group: 'a' },
        { label: 'asas', group: 'a' },
      ]"
      :group-by-key="'group'"
    >
      <div
        slot="trigger"
        class="u-display-flex u-flex-align-items-center u-flex-justify-content-space-between u-color-grey-lighter u-cursor-pointer optionsDropdown"
      >
        <div class="u-display-flex u-flex-direction-column u-color-grey-base">
          <span class="u-font-size-28 u-font-weight-bold">{{
            (selected || {}).label
          }}</span>
        </div>
      </div>
      <template slot="item" slot-scope="option">
        <div
          class="u-display-flex u-flex-align-items-center u-flex-justify-content-space-between"
          :title="option.label"
        >
          <p>
            {{ option.label }}
          </p>
        </div>
      </template>
    </vr-select>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from "./components/HelloWorld";
import VrSelect from "./components/select/Select";

export default {
  name: "App",
  components: {
    HelloWorld,
    VrSelect,
  },
  data() {
    return {
      options: [
        { label: 1 },
        { label: 2 },
        {
          label: 3,
          children: [
            {
              label: 4,
            },
            {
              label: 5,
            },
          ],
        },
      ],
      // selected: {},
      selected: { label: 3 },
    };
  },
};
</script>

<style lang="scss">
body {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
