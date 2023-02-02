<template>
  <a-space class="load-more-btn">
    <a-button v-if="loading" type="outlined" loading size="large"
      >Loading</a-button
    >
    <a-button v-else type="primary" size="large" :disabled="disabled"
      >Load more</a-button
    >
  </a-space>
</template>

<script>
export default {
  name: "LoadMoreButton",
  props: {
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    loading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.load-more-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
