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
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
    <back-top-button />
  </div>
</template>

<script>
import HeaderContainer from "@/components/HeaderContainer.vue";
import BackTopButton from "@/components/BackTopButton.vue";

export default {
  name: "App",
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    HeaderContainer,
    BackTopButton,
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
}

.layout {
  min-height: 100vh;
  background: transparent !important;
}

.ant-layout {
  min-height: 100% !important;
}

.content {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
}

.dark {
  background: #1b1b1b !important;
}
</style>
