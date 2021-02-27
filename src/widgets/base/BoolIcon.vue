<template>
  <i v-if="bolVal" class="fas fa-check-circle text-success"></i>
  <i v-else class="fas fa-times fa-fw text-danger"></i>
</template>

<script>
export default {
  name: 'BoolIcon',
  props: ['bolVal']
}
</script>

