<template>
  <div class="toast-container position-absolute top-0 end-0 p-3" id="toastPlacement">
    <transition v-for="msg in errmsgs" enter-active-class="animate__animated animate__tada"
                      leave-active-class="animate__animated animate__bounceOutRight" :key="msg.id">
      <Toast :msg="msg" autoclose=3000 @toastOut="msgOut($event)" />
    </transition>
  </div>
</template>

<script>
import Toast from "../message/Toast.vue";

export default {
  name: 'GlobalStoreToastWatcher',
  components: {Toast},
  data(){
    return {
      errmsgs: []
    }
  },
  created() {
    this.$watch(
      () => this.$store.state.errMsgs.length, () => {
        if (this.$store.state.errMsgs.length == 0) return;
        //let errmsg = this.$store.commit('popErrMsg')
        this.errmsgs = this.errmsgs.concat(this.$store.state.errMsgs);
        this.$store.commit('setErrMsg');
      }
    );
  },
  methods: {
    msgOut(msg){
      this.errmsgs.splice(this.errmsgs.indexOf(msg), 1)
    }
  }
}
</script>

