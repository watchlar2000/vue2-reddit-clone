<template>
  <content-container v-if="!loading">
    <post-sort-button
      @sort="(val) => sortListByParam(val)"
      :options="sortingOptions"
    ></post-sort-button>
    <posts-list ref="posts" :posts="paginatedList()" class="mt-1"></posts-list>
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
import { nextTick } from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
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
    ...mapState("posts", ["posts", "loading", "sortingOptions"]),
    ...mapGetters("posts", ["maxPostsQty"]),
    isPostsQtyGreaterThanMax() {
      return this.paginatedList.length >= this.maxPostsQty ? true : false;
    },
    isLoadButtonShown() {
      return this.posts.length !== 0;
    },
    page() {
      const currentPage = this.$route.query.page;
      return currentPage === undefined ? 1 : +currentPage;
    },
  },
  methods: {
    ...mapActions("posts", ["getAllPosts", "updateCurrentSortingOpt"]),
    paginatedList() {
      const { pageSize } = this.pagination;
      const postsPerPage = this.page * pageSize;
      return this.posts.slice(0, postsPerPage);
    },
    loadPosts(sortingParam) {
      this.getAllPosts(sortingParam);
    },
    loadMorePosts() {
      const pagination = this.pagination;
      pagination.loading = true;
      setTimeout(() => {
        const nextPage = this.page + 1;
        this.$router.push({ query: { page: nextPage } });
        this.scrollToPost();
        pagination.loading = false;
      }, 2000);
    },
    sortListByParam(val) {
      const sortingOpt = JSON.parse(val.key);
      const { param: userSortingParam } = sortingOpt;
      this.updateCurrentSortingOpt(sortingOpt);
      this.loadPosts(userSortingParam);
    },
    scrollToPost() {
      const postsDiv = this.$refs["posts"].$el;
      const postsDivChildren = postsDiv.children;
      const postsPerPage = this.$options.$POSTS_PER_PAGE;
      nextTick(() => {
        postsDivChildren[
          postsPerPage * this.page - postsPerPage
        ].scrollIntoView({
          behavior: "smooth",
        });
      });
    },
  },
  $POSTS_PER_PAGE: 3,
};
</script>
