<template>
  <ul class="nav">
    <button v-for="tab in tabs" class="nav-link" :class="{active: modelValue==tab.code}" @click="submit(tab.code)">{{ tab.title }}</button>
  </ul>
</template>

<script lang="ts">
import {PropType} from 'vue'
interface Tab {title: String, code: String}

export default {
  name: 'LoadButton',
  props: {
    tabs: Object as PropType<Tab>,
    modelValue: String},
  emits: ['update:modelValue'],
  data(){
    return {
      LayoutClass: {
        'pills': 'nav-pills', 'tabs': 'nav-tabs', 'v-pills': 'flex-column nav-pills', 'v-tabs': 'flex-column nav-tabs'
      }
    }
  },
  methods: {
    submit(code) {
      this.$emit('update:modelValue', code)
    }
  }
}
</script>
