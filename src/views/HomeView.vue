<template>
  <content-container v-if="isLoadButtonShown">
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
  </content-container>
</template>

<script>
import { loadPosts } from "@/api";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import PostsList from "@/components/PostsList.vue";
import PostSortButton from "@/components/PostSortButton.vue";
import ContentContainer from "@/components/ContentContainer.vue";

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
    ContentContainer,
  },
  mounted() {
    this.loadPosts();
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
    async loadPosts() {
      const postsData = await loadPosts();
      this.posts = this.sortPosts(postsData.data.children, "created");
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
      const posts = this.posts;
      switch (sortedParam) {
        case "most_upvoted":
          this.posts = this.sortPosts(posts, "ups");
          break;
        case "most_commented":
          this.posts = this.sortPosts(posts, "num_comments");
          break;
        default:
          this.posts = this.sortPosts(posts, "created");
      }
    },
    sortPosts(currentPosts, param) {
      return currentPosts.sort((a, b) => b.data[param] - a.data[param]);
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
