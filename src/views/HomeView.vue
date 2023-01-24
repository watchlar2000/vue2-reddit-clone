<template>
  <a-row
    type="flex"
    justify="center"
    v-if="isLoadButtonShown"
    style="margin-top: 2rem"
  >
    <a-col :xs="24" :sm="20" :md="16" :lg="14">
      <post-sort-button
        @sort="(val) => sortListByParam(val)"
        :options="$options.$SORT_OPTIONS"
      ></post-sort-button>

      <posts-list :posts="paginatedList" style="margin-top: 1rem"></posts-list>

      <load-more-button
        :loading="pagination.loading"
        :disabled="isPostsQtyGreaterThanMax"
        @loadPosts="loadMorePosts"
        style="margin: 1.5rem 0"
      ></load-more-button>
    </a-col>
  </a-row>
</template>

<script>
import loadPosts from "@/api";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import PostsList from "@/components/PostsList.vue";
import PostSortButton from "@/components/PostSortButton.vue";

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
    PostSortButton,
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
    sortListByParam(val) {
      this.pagination.pageSize = this.$options.$PAGE_SIZE;
      const { key: sortedParam } = val;
      switch (sortedParam) {
        case "most_upvoted":
          this.posts.sort((a, b) => b.data.ups - a.data.ups);
          break;
        case "most_commented":
          this.posts.sort((a, b) => b.data.num_comments - a.data.num_comments);
          break;
        default:
          this.posts.sort((a, b) => b.data.created - a.data.created);
      }
    },
  },
  $PAGE_SIZE: 3,
  $MAX_POSTS_QTY: 25,
  $SORT_OPTIONS: [
    {
      key: "default",
      value: "Date posted",
    },
    {
      key: "most_upvoted",
      value: "Most upvoted",
    },
    {
      key: "most_commented",
      value: "Most Commented",
    },
  ],
};
</script>

<style lang="scss" scoped></style>
