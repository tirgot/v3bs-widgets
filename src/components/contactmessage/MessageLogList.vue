<template>
  <div class="small mb-2">
    <div class="d-flex">
      <span>{{ log.user }}</span>
      <span v-if="log.old_status != log.new_status" class="px-5">
        <MessageStatus :status="log.old_status"></MessageStatus> -> <MessageStatus :status="log.new_status"></MessageStatus>
      </span>
      <span class="ms-auto">{{ log.created_at }}</span>
    </div>
    <HeightedText v-if="log.content" height="80px" :key="log.id">{{ log.content }}</HeightedText>
  </div>
</template>


<script>
import MessageStatus from "./MessageStatus.vue";
import HeightedText from "../../widgets/base/HeightedText.vue";

export default {
  name: 'MessageLogList',
  components: {HeightedText, MessageStatus},
  props: ['log'],
  emits: ['updateMessageDetail'],

}
</script>
