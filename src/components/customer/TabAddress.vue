<template>
  <ul v-if="addresses.length > 0">
    <li v-for="address in addresses" :key="address.id">
      <b>{{ address.name }}</b><br />
      {{ address.address_in_line }}
    </li>
  </ul>
  <div v-else class="alert alert-warning text-align">
    --- Customer does not input address. ---
  </div>
</template>

<script>
import LoadButton from "../../widgets/button/LoadButton.vue";
import BoolIcon from "../../widgets/base/BoolIcon.vue";

export default {
  name: 'TabAddress',
  props: ['addresses'],
}
</script>
