<template>
  <div>
  <h5>Logs:</h5>
  <PrescriptionLogForm :obj="obj" @updatePrescriptionDetail="$emit('updatePrescriptionDetail', $event)"></PrescriptionLogForm>
  <hr />
  <PrescriptionLogList v-for="log in obj.logs" :log="log" />
  </div>
</template>


<script>
import PrescriptionLogForm from "./PrescriptionLogForm.vue";
import PrescriptionStatus from "./PrescriptionStatus.vue";
import PrescriptionLogList from "./PrescriptionLogList.vue";
export default {
  name: 'PrescriptionLog',
  components: {PrescriptionLogList, PrescriptionStatus, PrescriptionLogForm},
  props: ['obj'],
  emits: ['updatePrescriptionDetail'],

}
</script>
