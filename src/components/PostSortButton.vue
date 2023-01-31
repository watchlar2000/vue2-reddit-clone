<template>
  <div>
    Sort By:
    <a-select
      label-in-value
      :default-value="defaultEl"
      class="select"
      @change="sort"
    >
      <a-select-option
        v-for="(v, idx) in options"
        :value="JSON.stringify(v)"
        :key="idx"
      >
        {{ v.value }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostSortButton",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState("posts", ["currentSortingOption"]),
    defaultEl() {
      const defautVal = this.currentSortingOption.value;
      return { key: defautVal };
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
