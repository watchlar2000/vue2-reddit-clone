<template>
  <a-space style="width: 100%; display: flex; justify-content: center">
    <a-button v-if="loading" type="outlined" loading size="large"
      >Loading</a-button
    >
    <a-button
      v-else
      @click="$emit('loadPosts')"
      type="primary"
      size="large"
      :disabled="disabled"
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
