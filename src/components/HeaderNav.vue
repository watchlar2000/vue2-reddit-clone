<template>
  <div
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <h1 class="header-title">
      <span class="icon">
        <a-icon type="reddit" />
      </span>
      Reddit Clone
    </h1>
    <a-popover>
      <template #content>
        <span>{{ capitalizeWord }}</span>
      </template>
      <a-switch v-model="checked" style="margin-right: 1rem" />
    </a-popover>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    checked() {
      this.$emit("toggle-mode");
    },
  },
  computed: {
    capitalizeWord() {
      return this.mode.slice(0, 1).toUpperCase() + this.mode.slice(1);
    },
  },
};
</script>
