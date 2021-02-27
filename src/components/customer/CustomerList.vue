<template>
  <div v-if="obj.count > 0" class="app-card-orders-table">
    <table class="table">
      <Thead :cols="[{text:'Name/Email', ordering:'email'},{text:'Date Joined', ordering:'date_joined'},
                     {text:'Active', ordering:'is_active'},{text:'Staff', ordering:'is_staff'},{text:'Orders'}]"
             class="table-light text-center" :ordering="ordering" @onOrdering="$emit('onOrdering', $event)"></Thead>
      <tbody>
        <tr v-for="row in obj.results" :class="row.id == $route.params.id ? 'table-active' : ''" :key="row.id">
          <td>
            <span><router-link :to="{name:'customer-detail', params: {id: row.id}}" class=""><b>{{ row.full_name }}</b></router-link></span>
            <small class="text-muted note">{{ row.email }}</small>
          </td>
          <td>
            {{ row.date_joined }}
          </td>
          <td :title="row.created_at"><BoolIcon :bol-val="row.is_active" /></td>
          <td :title="row.created_at"><BoolIcon :bol-val="row.is_staff" /></td>
          <td>{{ row.num_orders }}</td>
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
import BoolIcon from "../../widgets/base/BoolIcon.vue";

export default {
  name: 'CustomerList',
  components: {BoolIcon, Thead},
  props: ['obj', 'ordering'],
  emits: ['onOrdering']
}
</script>
