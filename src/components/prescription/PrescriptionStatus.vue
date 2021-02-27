<template>
  <div v-if="status === 1" className="badge bg-dark">Open</div>
  <div v-else-if="status === 11" className="badge bg-danger">Processing</div>
  <div v-else-if="status === 13" className="badge bg-danger">Looking For DME</div>
  <div v-else-if="status === 15" className="badge bg-danger">Issues</div>
  <div v-else-if="status === 23" className="badge bg-success">Assigned a DME</div>
  <div v-else-if="status === 25" className="badge bg-secondary">Solved / Replied</div>
  <div v-else-if="status === 41" className="badge bg-dark">Case Terminated</div>
  <div v-else className="badge bg-warning">ERR-{{ status }}</div>
</template>

<script>
export default {
  name: 'PrescriptionStatus',
  props: {
    status: 0
  },

}
</script>
