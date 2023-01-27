<template>
  <div>
    Sort By:
    <a-select
      label-in-value
      :default-value="defaultEl"
      class="select"
      @change="sort"
    >
      <a-select-option v-for="(v, idx) in options" :value="v.key" :key="idx">
        {{ v.value }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: "PostSortButton",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    defaultEl() {
      return { key: this.options[0].key };
    },
  },
  methods: {
    sort(val) {
      this.$emit("sort", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 150px;
}
</style>
