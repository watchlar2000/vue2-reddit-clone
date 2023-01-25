<template>
  <div class="posts-list">
    <post-item
      v-for="(post, idx) in posts"
      :key="idx"
      :post="post.data"
    ></post-item>
  </div>
</template>

<script>
import { formatDistanceStrict } from "date-fns";
import PostItem from "./PostItem.vue";

export default {
  name: "PostsList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(utcTime) {
      return formatDistanceStrict(utcTime * 1000, Date.now());
    },
    formatNumber(num) {
      return num > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
