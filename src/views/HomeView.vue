<template>
  <a-row type="flex" justify="center">
    <a-col :xs="24" :sm="20" :md="16" :lg="14">
      <a-card
        v-for="(post, idx) in posts"
        :key="idx"
        style="margin-inline: auto; margin-top: 1.5rem"
      >
        <a-row type="flex">
          <a-col :span="2" class="upvotes">
            <a-icon type="caret-up" class="pointer" />
            <a-popover placement="left" class="upvotes-data">
              <template slot="content">
                {{ post.data.ups }}
              </template>
              {{ formatUpvotes(post.data.ups) }}
            </a-popover>
            <a-icon type="caret-up" :rotate="180" class="pointer" />
          </a-col>
          <a-col :span="21" :offset="1" :lg="{ span: 22, offset: 0 }">
            <span>
              Posted by {{ post.data.author }}
              {{ formatDate(post.data.created) }} ago
            </span>
            <a-card-meta :title="post.data.title" style="margin-top: 0.05rem" />
            <div style="width: 75%; margin-inline: auto" class="image">
              <img alt="logo" :src="post.data.url" />
            </div>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
// import PostsList from "@/components/PostsList.vue";
import loadPosts from "@/api";
import { formatDistanceStrict } from "date-fns";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
      pagination: {
        pageSize: 5,
      },
    };
  },
  components: {},
  mounted() {
    this.load();
  },
  computed: {},
  methods: {
    async load() {
      const postsData = await loadPosts();
      this.posts = postsData.data.children;
    },
    formatDate(utcTime) {
      return formatDistanceStrict(utcTime * 1000, Date.now());
    },
    formatUpvotes(num) {
      return num > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>

<style lang="scss">
.ant-card {
  border: 2px solid transparent;

  .image {
    margin-top: 1rem;
  }

  &-meta-title {
    font-size: 1.5rem;
    color: #7a7a7a;
    font-weight: 700;
  }
}

.ant-card:hover {
  border: 2px solid #a2a2a2;
}

.upvotes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;

  &-data {
    font-weight: 700;
    font-size: 1rem;
  }

  .anticon {
    font-size: 1.75rem;
  }
}
</style>
