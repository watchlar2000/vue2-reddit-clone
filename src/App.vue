<template>
  <div id="app">
    <a-layout
      type="flex"
      justify="center"
      :class="mode === 'light' ? 'light' : 'dark'"
    >
      <header-container
        :mode="mode"
        @toggle-mode="toggleMode"
      ></header-container>
      <a-layout-content style="padding: 1rem">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import HeaderContainer from "./components/HeaderContainer.vue";

export default {
  name: "App",
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    HeaderContainer,
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === "light" ? "dark" : "light";
    },
  },
};
</script>

<style lang="scss">
@import url("./styles/styles.scss");

.dark {
  background: #192734 !important;
}
</style>
