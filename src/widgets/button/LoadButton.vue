<template>
  <button v-if="$store.state.isLoading" disabled>
    <div class="spinner-border spinner-border-sm" role="refresh"><span class="visually-hidden">Loading</span></div>
  </button>
  <button v-else>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'LoadButton',
}
</script>
