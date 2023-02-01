<template>
  <div class="header-top">
    <div class="logo">
      <h1 class="header-title">
        <span class="icon">
          <a-icon type="reddit" />
        </span>
        Reddit Clone
      </h1>
      <div class="mode-toggle">
        <span>{{ displayMode }}</span>
        <a-switch v-model="checked" />
      </div>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "HeaderNav",
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    checked() {
      this.toggleDarkMode();
    },
  },
  computed: {
    ...mapState("ui", ["isDark"]),
    displayMode() {
      return this.isDark ? "Night" : "Day";
    },
  },
  methods: {
    ...mapActions("ui", ["toggleDarkMode"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  &-title {
    color: var(--font-color);
  }

  &-top {
    padding: 1rem 1.25rem 0;

    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .mode-toggle {
      display: flex;
      align-content: center;
      gap: 0.5rem;

      span {
        font-weight: 600;
        color: var(--secondary-color);
      }
    }
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__items {
    display: flex;
    gap: 1.5rem;
    color: var(--secondary-color);

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
    color: var(--primary-color);
  }
}
</style>
