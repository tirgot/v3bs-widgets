<template>
  <div class="card">
    <div class="card-header d-flex"><b>{{ obj.name }}</b><span class="ms-auto">{{ obj.created_at }}</span></div>
    <div class="card-body">
      <div class="card-title small text-right text-decoration-underline text-danger">{{ obj.phone }} / {{ obj.email }}</div>
      <div class="card-text">{{ obj.message }}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MessageSummary',
  props: ['obj'],

}
</script>
