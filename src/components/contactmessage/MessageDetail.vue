<template>
  <div class="app-card-header p-3">
    <div v-if="$route.params.id"><router-link :to="{'name':'messages'}">&lt;&lt;&lt; Show Message List </router-link></div>
    <h4 class="d-flex">Message Detail<span class="ms-auto"><MessageStatus :status="obj.status" /></span></h4>
  </div>
  <div class="app-card-body p-3">
    <MessageSummary :obj="obj"></MessageSummary>
    <MessageLog :obj="obj" @updateMessageDetail="fetch();if($event) $emit('updateMessageList');"></MessageLog>
  </div>
</template>

<script>
import MessageSummary from "./MessageSummary.vue";
import MessageLog from "./MessageLog.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";
import MessageStatus from "./MessageStatus.vue";
export default {
  name: 'MessageDetail',
  components: {MessageStatus, LoadButton, MessageLog, MessageSummary},
  props: ['id'],
  data(){return{
    obj: {}
  }},
  created() {
    this.$watch('id', (newVal, oldVal) => {
      this.fetch();
    })
  },
  mounted() {
    this.fetch();
  },
  emits: ['updateMessageList'],
  methods: {
    fetch() {
      this.$http.get('/api/contact-messages/'+this.id).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});
    },
  }
}
</script>
