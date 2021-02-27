<template>
  <div v-if="obj.count > 0" class="app-card-orders-table">
    <table class="table">
      <Thead :cols="[{'text':'Name'},{'text':'Location'},{'text':'Requested Time'},{'text':'Insurance'},{'text':'Status'}]" class="table-light text-center"></Thead>
      <tbody>
        <tr v-for="row in obj.results" :class="row.id == $route.params.id ? 'table-active' : ''" :key="row.id">
          <td><router-link :to="{'name':'prescription-detail', 'params': {id: row.id}}">{{ row.full_name }}</router-link></td>
          <td>{{ row.location_city_level }}</td>
          <td>
            <span>{{ row.human_created_at }}</span>
            <span class="note">{{ row.created_at }}</span>
          </td>
          <td>
            <span>{{ row.insurance }}</span>
            <span class="note">{{ row.insurance_membership }}</span>
          </td>
          <td><PrescriptionStatus :status="row.status"></PrescriptionStatus></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="alert alert-warning text-align">
    --- NO RESULT ---
  </div>
</template>


<script>
import Thead from "../../widgets/table/Thead.vue";
import PrescriptionStatus from "./PrescriptionStatus.vue";

export default {
  name: 'PrescriptionList',
  components: {Thead, PrescriptionStatus},
  props: ['obj'],
}
</script>
