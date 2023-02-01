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
      <p>
        <a href="https://www.reddit.com/r/memes/" target="_blank">{{
          $t("aboutView.note")
        }}</a>
      </p>
      <p>
        {{ $t("aboutView.contacts") }}
      </p>
      <ul class="contacts">
        <li>
          <a href="https://github.com/watchlar2000" target="_blank"
            ><a-icon type="github" class="icon"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sergii-koch/" target="_blank"
            ><a-icon type="linkedin" class="icon"
          /></a>
        </li>
        <li>
          <a href="mailto:sergii.koch@gmail.com" target="_blank"
            ><a-icon type="mail" class="icon"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/watchlar2000/" target="_blank"
            ><a-icon type="instagram" class="icon"
          /></a>
        </li>
      </ul>
    </div>
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

  h2 {
    color: var(--heading-color);
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    line-height: 140%;
    font-size: 1rem;
  }

  .icon {
    font-size: 1.25rem;
  }
}

.contacts {
  display: flex;
  gap: 1rem;
}
</style>
