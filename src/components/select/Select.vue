/* eslint-disable */
<template>
  <div class="vr-select-container">
    <div class="select-container" :name="id" :id="id">
      <slot name="trigger">
        <p>{{ value && value.label }} Tippy Trigger</p>
      </slot>
    </div>
    <tippy
      style="margin: 4px 0 0 0"
      class="dropdown-content u-overflow-auto u-max-height-400"
      :to="id"
      distant="0"
      trigger="click"
      interactive="true"
      theme="dropdown"
      placement="bottom-start"
    >
      <div
        v-for="option in options_"
        :id="option.label"
        :key="option.label"
        @click="clicked(option)"
        v-if="!groupByKey"
        class="select__dropdown-list-item"
      >
        {{ option.label }}
      </div>
      <div
        v-for="(option, value, $index) in options_"
        :id="option.label"
        :key="option.label"
        v-if="groupByKey"
        style="margin: 8px 0px"
      >
        <section>
          <p
            @click="option.open = !option.open"
            v-show="value != 'undefined'"
            class="select__dropdown-list-heading"
            style=" display: flex; justify-content: space-between; "
          >
            {{ value }}
            <rb-icon style=" margin-left: 12px; " v-if="option.open" :icon="'arrow1-down'" class="rb-icon--small u-color-grey-light"></rb-icon>
            <rb-icon style=" margin-left: 12px; " v-if="!option.open" :icon="'arrow1-up'" class="rb-icon--small u-color-grey-light"></rb-icon>
          </p>
          <div
            v-show="option.open"
            v-for="item in option.list"
            :key="item.label"
            @click="clicked(item)"
            class="select__dropdown-list-item"
          >
            {{ item.label }}
          </div>
        </section>
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
    value: Object,
    groupByKey: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id: `vrSelect${this._uid}`,
      instance: null,
      options_: [],
    };
  },
  created() {
    console.log(this.groupByKey);
    if (this.groupByKey) {
      this.options_ = this.options.reduce((acc, item) => {
        if (acc[item[this.groupByKey]]) {
          acc[item[this.groupByKey]]["list"].push(item);
        } else {
          acc[item[this.groupByKey]] = {};
          acc[item[this.groupByKey]]["open"] = true;
          acc[item[this.groupByKey]]["list"] = [];
          acc[item[this.groupByKey]]["list"].push(item);
        }
        return acc;
      }, {});
      console.log(this.options_);
    } else {
      this.options_ = [...newValue];
    }
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
      this.$emit("input", data);
      this.$emit("onChange", data);
      this.instance.hide();
    },
    onMount(data) {
      console.log(data, "onMount");
    },
  },
  watch: {
    options(newValue) {
      if (this.groupByKey) {
        this.options_ = this.options.reduce((acc, item) => {
          if (acc[item[this.groupByKey]]) {
            acc[item[this.groupByKey]]["list"].push(item);
          } else {
            acc[item[this.groupByKey]] = {};
            acc[item[this.groupByKey]]["open"] = true;
            acc[item[this.groupByKey]]["list"] = [];
            acc[item[this.groupByKey]]["list"].push(item);
          }
          return acc;
        }, {});
        console.log(this.options_);
      } else {
        this.options_ = [...newValue];
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dropdown-theme {
  margin: 8px 0px;
}
.tippy-tooltip {
  padding: 0px !important;
  background: white !important;
  .tippy-tooltip {
    .light-theme[data-animatefill] {
      background: white !important;
    }
  }
}
.select__dropdown-list-heading {
  cursor: pointer;
  padding: 8px 24px !important;
}
.select__dropdown-list-item:hover {
  color: white;
}
.active {
}
</style>
