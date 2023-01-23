<template>
  <div>
    <posts-list :posts="paginatedList"></posts-list>
    <load-more-button
      :shown="isLoadButtonShown"
      :loading="pagination.loading"
      :disabled="isPostsQtyGreaterThanMax"
      @loadPosts="loadMorePosts"
    ></load-more-button>
  </div>
</template>

<script>
import loadPosts from "@/api";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import PostsList from "@/components/PostsList.vue";

export default {
  name: "HomeView",
  data() {
    return {
      subreddit: "r/Memes",
      posts: [],
      pagination: {
        pageSize: this.$options.$PAGE_SIZE,
        loading: false,
      },
    };
  },
  components: {
    PostsList,
    LoadMoreButton,
  },
  mounted() {
    this.load();
  },
  computed: {
    paginatedList() {
      return this.posts.slice(0, this.pagination.pageSize);
    },
    isPostsQtyGreaterThanMax() {
      return this.paginatedList.length >= this.$options.$MAX_POSTS_QTY
        ? true
        : false;
    },
    isLoadButtonShown() {
      return this.posts.length !== 0;
    },
  },
  methods: {
    async load() {
      const postsData = await loadPosts();
      this.posts = postsData.data.children;
    },
    async loadMorePosts() {
      this.pagination.loading = true;
      setTimeout(() => {
        this.pagination.loading = false;
        this.pagination.pageSize += this.$options.$PAGE_SIZE;
      }, 2000);
    },
  },
  $PAGE_SIZE: 3,
  $MAX_POSTS_QTY: 25,
};
</script>

<style lang="scss"></style>
