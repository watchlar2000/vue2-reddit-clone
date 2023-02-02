<template>
  <a-card class="post">
    <a-row type="flex">
      <a-col :span="2" class="upvotes">
        <a-icon type="caret-up" class="pointer" />
        <a-popover placement="left" class="upvotes-data">
          <template slot="content">
            {{ post.ups }}
          </template>
          {{ formatNumber(post.ups) }}
        </a-popover>
        <a-icon type="caret-up" :rotate="180" class="pointer" />
      </a-col>
      <a-col :span="21" :offset="1" :lg="{ span: 22, offset: 0 }">
        <span>
          Posted by {{ post.author }} {{ formatDate(post.created) }} ago
        </span>
        <h2 v-if="clickableTitle" class="post-title">
          <router-link :to="{ name: 'post', params: setRouteParams }">{{
            post.title
          }}</router-link>
        </h2>
        <h2 v-else class="post-title">
          {{ post.title }}
        </h2>
        <div class="post-image">
          <img :src="post.url" :alt="post.title" />
        </div>
        <div class="post-footer">
          <span class="button pointer">
            <a-icon type="wechat" />
            {{ formatNumber(post.num_comments) }} Comments
          </span>
          <span class="button pointer" @click="save">
            <a-icon type="save" /> Save
          </span>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import { formatDistanceStrict } from "date-fns";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
    clickableTitle: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    formatDate(utcTime) {
      return formatDistanceStrict(utcTime * 1000, Date.now());
    },
    formatNumber(num) {
      return num > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
    save() {
      alert(
        "Saved to local storage! P.S. This feature will be implemented later "
      );
    },
  },
  computed: {
    setRouteParams() {
      const currentPost = this.post;
      const id = currentPost.id;
      const title = currentPost.title.toLowerCase().split(" ").join("_");
      // return `/post/${id}/${title}`;
      return { id, title };
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  border: 2px solid transparent;
  margin-inline: auto;

  &-image {
    width: 75%;
    margin-top: 1rem;
    margin-inline: auto;
  }

  &-meta-title {
    font-size: 1.5rem;
    color: #7a7a7a;
    font-weight: 700;
  }

  &-title {
    color: var(--heading-color) !important;
  }
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
    transition: all 0.05s linear;
  }

  .button:hover {
    background: var(--tertiary-color);
  }

  .anticon {
    font-size: 1.25rem;
  }
}
</style>
