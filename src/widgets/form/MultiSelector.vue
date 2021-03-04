<template>
  <Multiselect v-model="val_arr" :options="options" mode="tags"></Multiselect>
</template>

<script>
import Multiselect from "@vueform/multiselect"

export default {
  name: "MultiSelector",
  components: { Multiselect },
  props: ['modelValue', 'options'],
  data(){
    return {
      val_arr: [0]
    }
  },
  emits: ['update:modelValue'],
  watch: {
    val_arr(newVal, oldVal){
      this.$emit('update:modelValue', newVal)
    }
  },
  created(){
    this.val_arr = this.modelValue
  }
}

</script>

<style src="@vueform/multiselect/themes/default.css"></style>
