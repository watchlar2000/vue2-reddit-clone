<template>
  <div>
    <content-container v-if="this.post">
      <a-button @click="goBack">Back</a-button>
      <post-item
        :post="post"
        :clickable-title="false"
        style="margin-top: 1rem"
      ></post-item>
      <div style="margin-top: 2rem">
        <h2>Comments:</h2>
        <ul style="margin-top: 1rem">
          <li v-for="c in comments" :key="c.id">{{ c.data.body }}</li>
        </ul>
      </div>
    </content-container>
  </div>
</template>

<script>
import { loadPostComments } from "../api";
import PostItem from "@/components/PostItem.vue";
import ContentContainer from "@/components/ContentContainer.vue";

export default {
  name: "PostView",
  data() {
    return {
      post: null,
      comments: null,
    };
  },
  mounted() {
    this.loadComments();
  },
  components: {
    PostItem,
    ContentContainer,
  },
  methods: {
    async loadComments() {
      const postData = await loadPostComments(this.getRouteParams);
      const [post, comments] = postData;
      this.post = post.data.children[0].data;
      this.comments = comments.data.children;
      console.log(this.comments);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    getRouteParams() {
      return this.$route.params;
    },
  },
};
</script>
