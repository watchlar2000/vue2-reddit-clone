<template>
  <content-container v-if="!loadingPosts">
    <post-sort-button
      @sort="(val) => sortListByParam(val)"
      :options="sortingOptions"
    ></post-sort-button>
    <posts-list :posts="paginatedList()" class="mt-1"></posts-list>
    <load-more-button
      :loading="pagination.loading"
      :disabled="isPostsQtyGreaterThanMax"
      @loadPosts="loadMorePosts"
      class="my-15"
    ></load-more-button>
  </content-container>
  <content-container v-else>Loading...</content-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import PostsList from "@/components/PostsList.vue";
import PostSortButton from "@/components/PostSortButton.vue";
import ContentContainer from "@/components/ContentContainer.vue";

export default {
  name: "HomeView",
  data() {
    return {
      subreddit: "r/Memes",
      pagination: {
        pageSize: this.$options.$POSTS_PER_PAGE,
        loading: false,
      },
      loading: false,
    };
  },
  components: {
    PostsList,
    LoadMoreButton,
    PostSortButton,
    ContentContainer,
  },
  mounted() {
    if (this.posts.length === 0) {
      this.loadPosts();
    }
  },
  computed: {
    sortingOptions() {
      return this.$store.getters["posts/sortingOptions"];
    },
    maxPostsQty() {
      return this.$store.getters["posts/postsQty"];
    },
    posts() {
      return this.$store.getters["posts/posts"];
    },
    loadingPosts() {
      return this.$store.getters["posts/isLoading"];
    },
    isPostsQtyGreaterThanMax() {
      return this.paginatedList.length >= this.maxPostsQty ? true : false;
    },
    isLoadButtonShown() {
      return this.posts.length !== 0;
    },
  },
  methods: {
    paginatedList() {
      const page = this.$store.getters["posts/page"];
      const postsPerPage = page * this.pagination.pageSize;
      return this.posts.slice(0, postsPerPage);
    },
    loadPosts(sortingParam) {
      this.$store.dispatch("posts/getAllPosts", sortingParam);
    },
    loadMorePosts() {
      this.pagination.loading = true;
      setTimeout(() => {
        this.$store.dispatch("posts/addPage");
        this.pagination.loading = false;
      }, 2000);
    },
    sortListByParam(val) {
      const sortingOpt = JSON.parse(val.key);
      const { param: userSortingParam } = sortingOpt;
      this.$store.dispatch("posts/updateCurrentSortingOpt", sortingOpt);
      this.loadPosts(userSortingParam);
    },
  },
  $POSTS_PER_PAGE: 3,
};
</script>
