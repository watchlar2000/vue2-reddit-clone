<template>
  <div class="footer">
    <a href="https://github.com/watchlar2000/vue2-reddit-clone" target="_black"
      >Source code at Github</a
    >
    &#169; <span>{{ fullYear }}</span>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  computed: {
    fullYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;

  span {
    font-weight: 600;
  }
}
</style>
