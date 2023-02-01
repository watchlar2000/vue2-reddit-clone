<template>
  <div id="app" class="container" :class="isDarkMode">
    <a-layout type="flex" justify="center" class="layout">
      <header-container></header-container>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <footer-item />
      </a-layout-footer>
    </a-layout>
    <back-top-button />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderContainer from "@/components/HeaderContainer.vue";
import BackTopButton from "@/components/BackTopButton.vue";
import FooterItem from "@/components/FooterItem.vue";

export default {
  name: "App",
  data() {
    return {
      // root: null,
    };
  },
  components: {
    HeaderContainer,
    BackTopButton,
    FooterItem,
  },
  computed: {
    ...mapState("ui", ["isDark"]),
    isDarkMode() {
      console.log(this.isDark);
      return this.isDark ? "dark" : "";
    },
  },
  watch: {
    isDark() {
      const root = document.documentElement;
      const isDarkMode = this.isDarkMode ? "dark" : "light";
      console.log(root.setAttribute("data-theme", isDarkMode));
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
  background: var(--bg-color);
}

.ant-layout-footer {
  background: var(--tertiary-color) !important;
}
</style>
