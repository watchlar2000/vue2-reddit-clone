<template>
  <div class="header-top">
    <div class="logo">
      <h1 class="header-title">
        <span class="icon">
          <a-icon type="reddit" />
        </span>
        Reddit Clone
      </h1>
      <a-popover placement="left">
        <template #content>
          <span>{{ displayMode }}</span>
        </template>
        <div>
          <a-switch v-model="checked" />
        </div>
      </a-popover>
    </div>
    <div class="nav">
      <ul class="nav__items">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/my_saved_posts">Saved posts</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
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
.header-top {
  padding: 1rem 1.25rem 0;
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__items {
    display: flex;
    gap: 1.5rem;

    li {
      font-size: 1rem;
      padding: 0.675rem 0;
      line-height: 120%;

      a {
        text-decoration: none;
        font-weight: 600;
      }
    }
  }

  .router-link-exact-active {
    color: rgb(255, 69, 0);
  }
}
</style>
