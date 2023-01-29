<template>
  <div id="app" class="container">
    <a-layout
      type="flex"
      justify="center"
      :class="mode === 'light' ? 'light' : 'dark'"
      class="layout"
    >
      <header-container
        :mode="mode"
        @toggle-mode="toggleMode"
      ></header-container>
      <a-layout-content class="content">
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

.container {
  height: 100vh;
  // background: #f8f8f8 !important;
}

.layout {
  min-height: 100vh;
  background: transparent !important;
}

.content {
  padding: 0 1rem;
}

.dark {
  background: #1b1b1b !important;
}
</style>
