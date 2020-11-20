<template>
  <div :class="[buttonClass, 'rb-button']" @click="click()">
    <div class="rb-button__content">
      <span v-if="text" class="rb-button__text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VrButton',
  props: {
    text: String,
    size: {
      type: String,
      default: 'm',
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    type: {
      default: 'hollow',
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    clickFn: Function,
  },
  computed: {
    buttonClass() {
      return `rb-button--${this.type} rb-button__size--${this.size}`;
    },
  },
  methods: {
    click() {
      if (this.clickFn) {
        this.clickFn(this.$el, this.$parent);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
