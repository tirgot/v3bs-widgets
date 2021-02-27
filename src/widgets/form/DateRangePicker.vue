<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="date_from">
    <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
  </div>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="date_to">
    <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
  </div>
  <button class="btn btn-info" type="button" @click="submit" v-bind="$attrs">Search</button>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'DateRangePicker',
  props: ['modelValue'],
  data(){
    return {
      date_from: 0,
      date_to: 0
    }
  },
  emits: ['update:modelValue'],
  methods: {
    submit() {
      this.$emit('update:modelValue', this.date_from+'_'+this.date_to)
    }
  }
}
</script>