<template>
  <div v-if="obj.count > 0" class="app-card-orders-table">
    <table class="table">
      <Thead :cols="[{'text':'name'},{'text':'Contact'},{'text':'Sent Time'},{'text':'Status'}]" class="table-light text-center"></Thead>
      <tbody>
      <tr v-for="row in obj.results" :class="row.id == $route.params.id ? 'table-active' : ''" :key="row.id">
        <td><router-link :to="{'name':'message-detail', 'params': {id: row['id']}}">{{ row['name'] }}</router-link></td>
        <td>
          <span v-if="row.phone" :title="row.phone" class="badge bg-success mx-1"><i class="fas fa-phone fa-fw"></i></span>
          <span v-if="row.email" :title="row.email" class="badge bg-warning mx-1"><i class="far fa-envelope fa-fw"></i></span>
        </td>
        <td :title="row.created_at">
          <span>{{ row.human_created_at }}</span>
          <span class="note">{{ row.created_at }}</span>
        </td>
        <td><MessageStatus :status="row['status']"></MessageStatus></td>
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
import MessageStatus from "./MessageStatus.vue";

export default {
  name: 'MessageList',
  components: {Thead, MessageStatus},
  props: ['obj'],
}
</script>
