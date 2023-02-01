<template>
  <content-container>
    <div class="wrapper">
      <div class="header">
        <h2>{{ $t("aboutView.header") }}</h2>
        <locale-switcher />
      </div>
      <p>
        {{ $t("aboutView.paragraph1") }}
      </p>
      <p>
        {{ $t("aboutView.paragraph2") }}
      </p>
      <ul class="contacts">
        <li>
          <a href="https://github.com/watchlar2000" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sergii-koch/" target="_blank"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="mailto:sergii.koch@gmail.com" target="_blank">Email</a>
        </li>
        <li>
          <a href="https://www.instagram.com/watchlar2000/" target="_blank"
            >Instagram</a
          >
        </li>
      </ul>
    </div>

    <!-- <a-image :width="200" src="../assets/ukraine.svg" /> -->
  </content-container>
</template>

<script>
import ContentContainer from "@/components/ContentContainer.vue";
import LocaleSwitcher from "../components/LocaleSwitcher.vue";

export default {
  name: "AboutView",
  components: {
    ContentContainer,
    LocaleSwitcher,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.wrapper,
.contacts {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    line-height: 140%;
    font-size: 1rem;
  }
}
</style>
