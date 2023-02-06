<template>
  <a-row type="flex" justify="center" class="my-2 content">
    <a-col :xs="24" :sm="20" :md="16" :lg="14" class="content-col"
      ><slot></slot
    ></a-col>
  </a-row>
</template>

<script>
export default {
  name: "ContentContainer",
};
</script>

<style lang="scss" scoped>
.content {
  flex: 1;

  color: var(--secondary-color) !important;
  background: transparent;

  &-col {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
