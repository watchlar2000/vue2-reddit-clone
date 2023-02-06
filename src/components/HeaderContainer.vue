<template>
  <a-layout-header>
    <header-nav class="header-nav"></header-nav>
    <header-affix></header-affix>
    <header-description></header-description>
  </a-layout-header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import HeaderAffix from "./HeaderAffix.vue";
import HeaderDescription from "./HeaderDescription.vue";

export default {
  name: "HeaderContainer",
  components: {
    HeaderNav,
    HeaderAffix,
    HeaderDescription,
  },
};
</script>

<style lang="scss">
.ant-layout-header {
  background-color: var(--bg-color) !important;
  height: min-content !important;
  padding: 0 !important;
  line-height: 150% !important;
}

.subreddit-title {
  padding: 5rem 0;
  font-size: 3.5rem;
  color: #fff;
  text-shadow: 2px 4px 1px #231f1e;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/background_image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

.ant-collapse-header {
  font-size: 1.125rem;
  font-weight: 600;
}

.header-title {
  display: flex;
  height: 100%;
  font-size: 1.2rem;
  align-items: center;
  gap: 0.75rem;

  .icon {
    color: rgb(245, 245, 245);
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.ant-page-header-content {
  padding: 2rem 0 !important;
  margin: 0;
}
</style>
