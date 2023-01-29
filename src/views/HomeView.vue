<template>
  <content-container v-if="isLoadButtonShown">
    <post-sort-button
      @sort="(val) => sortListByParam(val)"
      :options="sortingOptions"
    ></post-sort-button>
    <posts-list :posts="paginatedList" class="mt-1"></posts-list>
    <load-more-button
      :loading="pagination.loading"
      :disabled="isPostsQtyGreaterThanMax"
      @loadPosts="loadMorePosts"
      class="my-15"
    ></load-more-button>
  </content-container>
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
    this.$store.dispatch("posts/getAllPosts");
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
    paginatedList() {
      return this.posts.slice(0, this.pagination.pageSize);
    },
    // postsByUpvotes() {
    //   return this.$store.getters["posts/postsByDate"];
    // },
    // postsByComments() {
    //   return this.$store.getters["posts/postsByDate"];
    // },
    isPostsQtyGreaterThanMax() {
      return this.paginatedList.length >= this.maxPostsQty ? true : false;
    },
    isLoadButtonShown() {
      return this.posts.length !== 0;
      // return true;
    },
  },
  methods: {
    // getPosts(sortingParam = undefined) {
    //   if (sortingParam) {
    //     console.log(sortingParam);
    //   }

    //   return this.$store.getters["posts/posts"];
    // },
    // async loadPosts() {
    //   const postsData = await loadPosts();
    //   this.posts = this.sortPosts(postsData.data.children, "created");
    // },
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
  // $SORT_OPTIONS: [
  //   {
  //     key: "default",
  //     value: "Date posted",
  //   },
  //   {
  //     key: "most_upvoted",
  //     value: "Most upvoted",
  //   },
  //   {
  //     key: "most_commented",
  //     value: "Most Commented",
  //   },
  // ],
};
</script>
