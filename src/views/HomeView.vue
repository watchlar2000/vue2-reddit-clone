<template>
  <a-row type="flex" justify="center">
    <a-col :xs="24" :sm="20" :md="16" :lg="14">
      <a-card v-for="(post, idx) in posts" :key="idx" class="post">
        <a-row type="flex">
          <a-col :span="2" class="upvotes">
            <a-icon type="caret-up" class="pointer" />
            <a-popover placement="left" class="upvotes-data">
              <template slot="content">
                {{ post.data.ups }}
              </template>
              {{ formatNumber(post.data.ups) }}
            </a-popover>
            <a-icon type="caret-up" :rotate="180" class="pointer" />
          </a-col>
          <a-col :span="21" :offset="1" :lg="{ span: 22, offset: 0 }">
            <span>
              Posted by {{ post.data.author }}
              {{ formatDate(post.data.created) }} ago
            </span>
            <h2>{{ post.data.title }}</h2>
            <div style="width: 75%; margin-inline: auto" class="image">
              <img :src="post.data.url" :alt="post.data.title" />
            </div>
            <div class="post-footer">
              <span class="button pointer">
                <a-icon type="wechat" />
                {{ formatNumber(post.data.num_comments) }} Comments
              </span>
              <span class="button pointer"> <a-icon type="save" /> Save </span>
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
      subreddit: "r/Memes",
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
      console.log(postsData.data);
    },
    formatDate(utcTime) {
      return formatDistanceStrict(utcTime * 1000, Date.now());
    },
    formatNumber(num) {
      return num > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>

<style lang="scss">
.post {
  border: 2px solid transparent;
  margin-inline: auto;
  margin-bottom: 1.5rem;

  .image {
    margin-top: 1rem;
  }

  &-meta-title {
    font-size: 1.5rem;
    color: #7a7a7a;
    font-weight: 700;
  }
}

.post:hover {
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

.post-footer {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  .button {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.14s linear;
  }

  .button:hover {
    background: #ededed;
  }

  .anticon {
    font-size: 1.25rem;
  }
}
</style>
