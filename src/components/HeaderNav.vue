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
      <div class="salute">
        <div class="salute-message">
          <span>{{ $t("message") }}</span>
          <img
            src="https://www.svgrepo.com/show/18911/ukraine.svg"
            alt="ukrainian_flag"
          />
        </div>
        <locale-switcher />
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";

export default {
  name: "HeaderNav",
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  components: {
    LocaleSwitcher,
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
  padding: 1rem 1.25rem;
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
        color: rgb(255, 69, 0);
      }
    }
  }
}

.salute {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &-message {
    display: flex;
    gap: 0.5rem;
  }

  img {
    height: 1rem;
    width: auto;
  }
}
</style>
