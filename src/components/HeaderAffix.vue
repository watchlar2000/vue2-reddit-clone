<template>
  <!-- <a-affix :offset-top="0"> -->
  <h2 class="subreddit-title">{{ titleUppercased }}</h2>
  <!-- </a-affix> -->
</template>

<script>
export default {
  name: "HeaderAffix",
  data() {
    return {
      title: "Memes",
    };
  },
  computed: {
    titleUppercased() {
      return this.title.toUpperCase();
    },
  },
};
</script>
