<template>
  <div>
    <content-container v-if="!loading && this.post !== null">
      <a-button @click="goBack">Back</a-button>
      <div class="mt-1">
        <post-item :post="getPostData()" :clickable-title="false"></post-item>
      </div>
      <div class="mt-2">
        <h2>Comments:</h2>
        <p class="mt-1">Comment section is going to be here...</p>
        <!-- <ul class="mt-1">
          <li v-for="c in comments" :key="c.id">{{ c.data.body }}</li>
        </ul> -->
      </div>
    </content-container>
    <content-container v-else>Loading...</content-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import PostItem from "@/components/PostItem.vue";
import ContentContainer from "@/components/ContentContainer.vue";

export default {
  name: "PostView",
  data() {
    return {
      comments: null,
    };
  },
  mounted() {
    this.getPostData();
  },
  components: {
    PostItem,
    ContentContainer,
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    getPostData() {
      const isPost = this.post;

      if (isPost === null) {
        this.$store.dispatch("posts/setPost", this.$route.params);
        return;
      }

      return isPost;
    },
  },
  computed: {
    ...mapState("posts", ["loading"]),
    ...mapGetters("posts", ["getPost"]),
    post() {
      const { id } = this.$route.params;
      return this.getPost(id);
    },
  },
};
</script>
