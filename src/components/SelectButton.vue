<template>
  <div class="sort">
    <span v-if="isTextShown">Sort By:</span>
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
export default {
  name: "SelectButton",
  props: {
    options: {
      type: Array,
      required: true,
    },
    isTextShown: {
      default: true,
    },
  },
  computed: {
    defaultEl() {
      const defaultOpt = this.options.find((o) => o.key === "default");
      const defautVal = defaultOpt.value;
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

.sort {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
