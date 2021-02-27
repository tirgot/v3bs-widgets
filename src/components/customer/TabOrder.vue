<template>
  <table v-if="orders.length > 0" class="table table-bordered">
    <Thead :cols="[{'text':'Order #'},{'text':'Data Placed'},{'text':'Items / Qty'},{'text':'Total'},{'text':'Status'}]" class="table-light text-center"></Thead>
    <tbody>
      <tr v-for="order in orders" :key="order.number">
        <td>
          #<b>{{ order.number }}</b>
        </td>
        <td>{{ order.date_placed }}</td>
        <td>{{ order.num_lines }} / {{ order.num_items }}</td>
        <td>{{ order.total_incl_tax }}</td>
        <td>{{ order.status }}</td>
      </tr>
    </tbody>
  </table>
  <div v-else class="alert alert-warning text-align">
    --- Customer not placed an order yet. ---
  </div>
</template>

<script>

import Thead from "../../widgets/table/Thead.vue";
export default {
  name: 'TabOrder',
  components: {Thead},
  props: ['orders'],
}
</script>
