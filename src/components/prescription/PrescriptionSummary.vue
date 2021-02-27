<template>
  <dl class="row">
    <dt class="col-4">Customer Name</dt><dd class="col-8">{{ obj.full_name }}</dd>
    <dt class="col-4">Customer Contact</dt><dd class="col-8">{{ obj.phone }} / {{ obj.email }}</dd>
    <dt class="col-4">Customer Address</dt><dd class="col-8">{{ obj.customer_address }}</dd>
    <dt class="col-4">Insurance Info</dt><dd class="col-8">{{ obj.insurance_in_line }}</dd>
    <dt class="col-4">Doctor</dt><dd class="col-8">{{ obj.doctor }}</dd>
    <dt class="col-4">Clinic Info</dt><dd class="col-8">{{ obj.obgyn_info }}</dd>
    <dt v-if="obj.memo" class="col-4">Memo</dt><dd v-if="obj.memo" class="col-8">{{ obj.memo }}</dd>
    <div class="w-100" style="height: 30px" />
    <dt class="col-4">Submited Date</dt><dd class="col-8">{{ obj.created_at }}</dd>
    <dt class="col-4">Last Update</dt><dd class="col-8">{{ obj.updated_at }}</dd>
  </dl>
</template>

<script>
export default {
  name: 'PrescriptionSummary',
  props: ['obj'],

}
</script>
