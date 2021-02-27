<template>
  <div v-if="obj.count > 0" class="app-card-orders-table">
    <table class="table">
      <Thead :cols="[{text:'Order Date', ordering:'date_placed'},{text:'Status', ordering:'status'},
                     {text:'Total'},{text:'Customer'},{text:'Shipping Address'},{text:'Payment and Billing'}, {text:''}]"
             class="table-light text-center" :ordering="ordering" @onOrdering="$emit('onOrdering', $event)"></Thead>
      <tbody>
        <tr v-for="row in obj.results">
          <td>
            <span>{{ row.human_date_placed }}</span><br />
            <span class="note">{{ row.date_placed }}</span>
          </td>
          <td>
            <span>#{{ row.number }}</span>
            <span class="note"><OrderStatus :status="row.status" /></span>
          </td>
          <td>
            <span>${{ row.total_incl_tax }}</span>
            <span class="note"><b class="text-danger">S:</b>${{ row.shipping_excl_tax }}|<b class="text-warning">T:</b>${{ row.total_tax }}|<b class="text-warning">D:</b>${{ row.total_discount_excl_tax }}</span>
          </td>
          <td v-if="row.customer">
            <span>{{ row.customer.full_name }}</span>
            <span class="note">{{ row.customer.email }}</span>
          </td>
          <td v-else><i class="fas fa-meh-blank fa-lg fa-fw"></i></td>
          <td>
            <span>{{ row.shipping_address.name }} <small>{{ row.shipping_address.phone_number }}</small></span>
            <span class="note">{{ row.shipping_address.address_in_line }}</span>
          </td>
          <td>
            <i v-if="row.payment_method == 'paypal'" class="fab fa-paypal text-info fa-fw"></i>
            <i v-else class="far fa-credit-card text-danger fa-fw"></i>
          </td>
          <td><router-link :to="{'name':'order-detail', 'params': {id: row.id}}" class="btn btn-outline-success">Detail</router-link></td>
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
import OrderStatus from "./OrderStatus.vue";

const block_user = '<h1>HELLO WORLD</h1>'

export default {
  name: 'CustomerList',
  components: {OrderStatus, Thead},
  props: ['obj', 'ordering'],
  emits: ['onOrdering']
}
</script>
