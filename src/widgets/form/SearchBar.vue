<template>
  <div class="input-group">
    <input type="text" class="form-control" ref="searchInput" @keyup.enter="submit" :placeholder="placeholder" />
    <button class="btn btn-info" type="button" @click="submit" v-bind="$attrs">Search</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'SearchBar',
  props: ['modelValue', 'placeholder'],
  emits: ['update:modelValue'],
  methods: {
    submit() {
      this.$emit('update:modelValue', this.$refs.searchInput.value)
    }
  }
}
</script>