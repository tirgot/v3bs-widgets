<template>
  <div class="app-card-header p-3">
    <div v-if="$route.params.id"><router-link :to="{'name':'messages'}">&lt;&lt;&lt; Show Customer List </router-link></div>
    <h4>Customer Detail</h4>
  </div>
  <div class="app-card-body p-3">
    <dl class="row">
      <dt class="col-4">Full Name</dt><dd class="col-8">{{ obj.full_name }}</dd>
      <dt class="col-4">Email</dt><dd class="col-8">{{ obj.email }}</dd>
      <dt class="col-4">Phone Number</dt><dd class="col-8">{{ obj.phone }}</dd>
      <dt class="col-4">Date Joined</dt><dd class="col-8">{{ obj.date_joined }}</dd>
      <dt class="col-4">Last Login</dt><dd class="col-8">{{ obj.last_login }}</dd>
      <dt class="col-4">Active?</dt><dd class="col-8"><BoolIcon :bol-val="obj.is_active" /></dd>
      <dt class="col-4">Staff User?</dt><dd class="col-8"><BoolIcon :bol-val="obj.is_staff" /></dd>
    </dl>

    <ul class="nav orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
      <li v-for="tab in [['TabOrder', 'Orders'], ['TabAddress', 'Addresses'], ['TabReview', 'Reviews']]" class="nav-item flex-sm-fill text-sm-center">
        <a :class="currComp == tab[0] ? 'nav-link active' : 'nav-link'" href="#" @click.prevent="currComp=tab[0]">{{ tab[1] }}</a>
      </li>
    </ul>

    <div class="tab-content p-3">
      <keep-alive><TabOrder v-if="currComp == 'TabOrder'" :orders="obj.orders" key="tab_order" /></keep-alive>
      <keep-alive><TabAddress v-if="currComp == 'TabAddress'" :addresses="obj.addresses" key="tab_address" /></keep-alive>
      <keep-alive><TabReview v-if="currComp == 'TabReview'" :reviews="obj.reviews" key="tab_review" /></keep-alive>
    </div>
  </div>



</template>

<script>
import LoadButton from "../../widgets/button/LoadButton.vue";
import BoolIcon from "../../widgets/base/BoolIcon.vue";
import TabOrder from "./TabOrder.vue";
import TabAddress from "./TabAddress.vue";
import TabReview from "./TabReview.vue";

export default {
  name: 'CustomerDetail',
  components: {BoolIcon, LoadButton, TabOrder, TabAddress, TabReview},
  props: ['id'],
  data(){return{
    obj: {
      orders: [],
      addresses: [],
      reviews: []
    },
    currComp: 'TabOrder',
  }},
  created() {
    this.$watch('id', (newVal, oldVal) => {
      this.fetch();
    })
  },
  mounted() {
    this.fetch();
  },
  emits: ['updateMessageList'],
  methods: {
    fetch() {
      this.$http.get('/api/customers/'+this.id).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});
    },
  }
}
</script>
