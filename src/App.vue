<template>
  <div id="app" style="height: 100vh">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to vr-select component" />
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
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
