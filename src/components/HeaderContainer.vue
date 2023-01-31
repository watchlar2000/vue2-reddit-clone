<template>
  <a-layout-header :class="mode">
    <header-nav
      :mode="mode"
      @toggle-mode="$emit('toggle-mode')"
      class="header-nav"
    ></header-nav>
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
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  components: {
    HeaderNav,
    HeaderAffix,
    HeaderDescription,
  },
};
</script>

<style lang="scss">
.dark {
  background: #2c2c2c !important;

  .ant-collapse {
    border: 1px solid #4f4f4f !important;
    background: #2c2c2c !important;
  }

  .ant-collapse-header {
    background: #2c2c2c !important;
  }

  .ant-collapse > .ant-collapse-item {
    border-bottom: 1px solid #4f4f4f !important;
  }

  .ant-collapse-content {
    background: #414141 !important;
    color: #f3f3f3 !important;
    border-top: 1px solid #4f4f4f !important;
  }

  .ant-page-header-content {
    background-color: #3d3d3d !important;
    color: #f3f3f3 !important;
  }

  h1,
  .ant-collapse-header,
  .ant-statistic-title,
  .ant-statistic-content {
    color: #f3f3f3 !important;
  }
}

.ant-layout-header {
  background-color: #fbfeff !important;
  height: min-content !important;
  padding: 0 !important;
  line-height: 120% !important;
}

.subreddit-title {
  padding: 5rem 0;
  font-size: 3.5rem;
  color: #fff;
  text-shadow: 2px 4px 1px #231f1e;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background_image.png");
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
    background: rgb(255, 69, 0);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.ant-page-header-content {
  padding: 2rem 0 !important;
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
}
</style>
