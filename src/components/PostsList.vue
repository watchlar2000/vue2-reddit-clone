<template>
  <a-row type="flex" justify="center">
    <a-col :xs="24" :sm="20" :md="16" :lg="14">
      <!-- <a-card v-for="(post, idx) in paginatedList" :key="idx" class="post">
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
      </a-card> -->
      <post-item
        v-for="(post, idx) in posts"
        :key="idx"
        :post="post"
      ></post-item>
    </a-col>
  </a-row>
</template>

<script>
import { formatDistanceStrict } from "date-fns";
import PostItem from "./PostItem.vue";

export default {
  name: "PostsList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
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
  },
};
</script>

<style lang="scss" scoped></style>
