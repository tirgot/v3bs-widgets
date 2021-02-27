<template>
  <div v-if="status === 1" class="badge bg-dark">Open</div>
  <div v-else-if="status === 11" class="badge bg-danger">Need follow up</div>
  <div v-else-if="status === 13" class="badge bg-danger">Issues</div>
  <div v-else-if="status === 21" class="badge bg-success">Solved / Replied</div>
  <div v-else-if="status === 41" class="badge bg-secondary">No Need to Reply</div>
  <div v-else-if="status === 42" class="badge bg-dark">Spam</div>
  <div v-else class="badge bg-warning">ERR{{ status }}</div>
</template>

<script>
export default {
  name: 'MessageStatus',
  props: {
    status: 0
  },

}
</script>
