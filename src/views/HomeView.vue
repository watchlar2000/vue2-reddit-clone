<template>
  <content-container v-if="!loading">
    <select-button
      @sort="(val) => sortListByParam(val)"
      :options="sortingOptions"
    ></select-button>
    <posts-list ref="posts" :posts="paginatedList()" class="mt-1"></posts-list>
    <load-more-button
      :loading="pagination.loading"
      :disabled="pagination.disabled"
      @click.native="loadMorePosts"
      class="mt-15"
    ></load-more-button>
  </content-container>
  <content-container v-else>Loading...</content-container>
</template>

<script>
import { nextTick } from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import PostsList from "@/components/PostsList.vue";
import SelectButton from "@/components/SelectButton.vue";
import ContentContainer from "@/components/ContentContainer.vue";

export default {
  name: "HomeView",
  data() {
    return {
      subreddit: "r/Memes",
      pagination: {
        pageSize: this.$options.$POSTS_PER_PAGE,
        loading: false,
        disabled: false,
      },
    };
  },
  components: {
    PostsList,
    LoadMoreButton,
    SelectButton,
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
      this.pagination.disabled =
        postsPerPage >= this.maxPostsQty ? true : false;
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
        this.routerPushQuery(nextPage);
        this.scrollToPost();
        pagination.loading = false;
      }, 500);
    },
    sortListByParam(val) {
      this.routerPushQuery(1);
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
    routerPushQuery(page) {
      this.$router.push({ query: { page } });
    },
  },
  $POSTS_PER_PAGE: 5,
};
</script>
