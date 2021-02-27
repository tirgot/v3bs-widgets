<template>
  <div v-if="status == 'Received'">Received</div>
  <div v-else-if="status == 'Complete'" class="text-success"><i class="far fa-check-circle fa-fw"></i> Complete</div>
  <div v-else-if="status == 'Hold'" class="text-danger"><i class="fas fa-radiation fa-fw"></i> Hold</div>
  <div v-else-if="status == 'Processing'" class="text-info"><i class="fas fa-wrench fa-fw"></i> Processing</div>
  <div v-else-if="status == 'Returned'" class="text-warning"><i class="fas fa-undo fa-fw"></i> Returned</div>
  <div v-else-if="status == 'Cancelled'" class="text-danger"><i class="fas fa-ban fa-fw"></i> Cancelled</div>
  <div v-else class="text-danger">[{{ status }}]</div>
</template>


<script>
export default {
  name: 'OrderStatus',
  props: ['status'],
}
</script>
