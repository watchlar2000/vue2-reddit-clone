<template>
  <div>
    <content-container v-if="this.post">
      <a-button @click="goBack">Back</a-button>
      <div class="mt-1">
        <post-item :post="post" :clickable-title="false"></post-item>
      </div>
      <!-- <div class="mt-2">
        <h2>Comments:</h2>
        <ul class="mt-1">
          <li v-for="c in comments" :key="c.id">{{ c.data.body }}</li>
        </ul>
      </div> -->
    </content-container>
  </div>
</template>

<script>
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
    if (this.post === null) {
      this.$store.dispatch("posts/getPost", this.$route.params);
    }
  },
  components: {
    PostItem,
    ContentContainer,
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    post() {
      const { id } = this.$route.params;
      return this.$store.getters["posts/post"](id);
    },
  },
};
</script>
