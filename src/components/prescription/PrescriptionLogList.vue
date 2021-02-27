<template>
  <div class="small mb-2">
    <div class="d-flex">
      <span>{{ log.user }}</span>
      <span v-if="log.old_status != log.new_status" class="px-5">
        <PrescriptionStatus :status="log.old_status"></PrescriptionStatus> -> <PrescriptionStatus :status="log.new_status"></PrescriptionStatus>
      </span>
      <span class="ms-auto">{{ log.created_at }}</span>
    </div>
    <HeightedText v-if="log.content" height="80px" :key="log.id">{{ log.content }}</HeightedText>
  </div>
</template>


<script>
import PrescriptionStatus from "./PrescriptionStatus.vue";
import HeightedText from "../../widgets/base/HeightedText.vue";

export default {
  name: 'PrescriptionLogList',
  components: {HeightedText, PrescriptionStatus},
  props: ['log'],
  emits: ['updatePrescriptionDetail'],

}
</script>
