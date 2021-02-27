<template>
  <div>
  <h5>Logs:</h5>
  <MessageLogForm v-if="[1, 11, 13].includes(obj.status)" :obj="obj" @updateMessageDetail="$emit('updateMessageDetail', $event);"></MessageLogForm>
  <hr />
  <MessageLogList v-for="log in obj.logs" :log="log" />
  </div>
</template>


<script>
import MessageLogForm from "./MessageLogForm.vue";
import MessageStatus from "./MessageStatus.vue";
import MessageLogList from "./MessageLogList.vue";
export default {
  name: 'MessageLog',
  components: {MessageLogList, MessageStatus, MessageLogForm},
  props: ['obj'],
  emits: ['updateMessageDetail'],

}
</script>
