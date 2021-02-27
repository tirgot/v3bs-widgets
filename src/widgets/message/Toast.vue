<template>
  <div v-if="isShow" class="toast show bg-primary text-white" role="error message">
    <div class="toast-header">
      <i class="fas fa-exclamation-triangle fa-fw text-danger"></i>
      <strong class="me-auto">{{ msg.message }} [{{ msg.code }}]</strong>
      <small></small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" @click="closeme"></button>
    </div>
    <div class="toast-body">
      <pre>{{ msg.detail }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['msg', 'autoclose'],
  data(){
    return {
      isShow: true,
      count: 0
    }
  },
  emits:['toastOut'],
  created() {
    if(this.autoclose){
      setTimeout(()=>{this.closeme()}, this.autoclose)
    }
  },
  methods: {
    closeme(){
      this.isShow = false;
      this.$emit('toastOut', this.msg)
    }
  }
}
</script>

