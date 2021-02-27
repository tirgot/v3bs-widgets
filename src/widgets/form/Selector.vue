<template>
  <select ref="sellerSelector" :value="modelValue"  class="form-select" @input="updateModelValue">
    <option v-for="opt in options" :value="opt.value">{{ opt.text }}</option>
  </select>
</template>


<script>
export default {
  name: "Selector",
  props: ['modelValue', 'options'],
  emits: ['update:modelValue'],
  methods: {
    updateModelValue(){
      this.$emit('update:modelValue', this.$refs.sellerSelector.value)
    }
  }
}

</script>