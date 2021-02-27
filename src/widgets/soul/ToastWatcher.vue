<script>
import { h } from 'vue'
import Toast from "../message/Toast.vue";

export default {
  name: 'ToastWatcher',
  components: {Toast},
  data(){
    return {
      container: h('div', {class: "toast-container position-absolute top-0 end-0 p-3", id: "toastPlacement"}),
    }
  },
  created() {
    this.$watch(
        () => this.$store.state.errMsgs.length, () => {
          if (this.$store.state.errMsgs.length == 0) return;
          let errmsg = this.$store.commit('popErrMsg')
          let toastEle = h('Toast', {msg: errmsg, autoclose: 2000})
          //this.container
          //this.errmsgs = this.errmsgs.concat(this.$store.state.errmsgs);
          //this.$store.commit('setErrMsg');
        }
    );
  },
  render() {
    a = h('div', {class: "toast-container position-absolute top-0 end-0 p-3", id: "toastPlacement"});

    return this.container
  }

}
</script>

