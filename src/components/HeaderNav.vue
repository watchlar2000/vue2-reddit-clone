<template>
  <div class="header-nav">
    <h1 class="header-title">
      <span class="icon">
        <a-icon type="reddit" />
      </span>
      Reddit Clone
    </h1>
    <a-popover placement="bottomLeft">
      <template #content>
        <span>{{ displayMode }}</span>
      </template>
      <div class="mr-1">
        <a-switch v-model="checked" />
      </div>
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
    displayMode() {
      return this.mode === "light" ? "Light mode" : "Dark mode";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
