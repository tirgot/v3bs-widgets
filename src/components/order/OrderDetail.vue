<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Order #{{ obj.number }}</h1>
    <div class="row">

      <div class="col-4">
        <div class="app-card">
          <div class="app-card-header p-3">
            <router-link :to="{'name':'orders'}">&lt;&lt;&lt; Show Order List </router-link>
          </div>
          <div class="app-card-body p-3">
            <div>
              customer: {{ obj.customer.full_name }} / {{ obj.customer.email }}
            </div>
          </div>
          <div class="app-card-footer p-3">
          </div>
        </div>
      </div>

      <div class="col-8">
        <div class="app-card p-3">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import LoadButton from "../../widgets/button/LoadButton.vue";
export default {
  name: 'OrderDetail',
  components: { LoadButton },
  data(){return{
    obj: {},
    id: this.$route.params.id
  }},
  created() {
    this.fetch();
  },
  mounted() {
  },
  methods: {
    fetch() {
      this.$http.get('/api/orders/'+this.id).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});
    },
  }
}
</script>
