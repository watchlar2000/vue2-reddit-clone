<template>
  <content-container>
    <div class="not-found">404 | Page not found</div>
  </content-container>
</template>

<script>
import ContentContainer from "@/components/ContentContainer.vue";

export default {
  name: "NotFoundView",
  components: {
    ContentContainer,
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
}
</style>
