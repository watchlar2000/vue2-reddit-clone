<template>
  <a-row type="flex" justify="center" class="mt-2">
    <a-col :xs="24" :sm="20" :md="16" :lg="14"><slot></slot></a-col>
  </a-row>
</template>

<script>
export default {
  name: "ContentContainer",
};
</script>
