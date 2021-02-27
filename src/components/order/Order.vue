<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Orders</h1>

    <div class="row">
      <div class="col">
        <div class="app-card p-3">
          <div class="d-flex align-items-end my-3">
          <span class="pe-3">
            <LoadButton class="btn btn-primary px-3 text-white" @click="fetch"><i class="fas fa-sync fa-fw"></i></LoadButton>
          </span>
            <span class="ms-auto">
            <SearchBar placeholder="Order Number ..." v-model="filter.q" class="btn btn-success text-light"/>
          </span>
          </div>
          <OrderList :obj="obj" :ordering="filter.o" @onOrdering="filter.o=$event.join('')" />

          <div class="d-flex align-items-center">
            <div class="ms-auto"><Pager v-model:page="filter.p" :size="15" :total="obj.count" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pager from "../../widgets/pager/Pager.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";
import OrderList from "./OrderList.vue";
import SearchBar from "../../widgets/form/SearchBar.vue";

export default {
  name: 'Customer',
  components: {SearchBar, OrderList, LoadButton, Pager},
  data(){
    return{
      filter: {
        o: '',
        p: 1,
        q: '',
      },
      ofilter_page: '',
      obj: {},
      status_options: [['', '--- ALL ---'], [1, 'Open'], [11, 'Need follow up'], [13, 'Issues'], [21, 'Solved / Replied'], [41, 'No need to reply'], [42, 'Spam']]
    }
  },
  mounted() {
    this.fetch()
  },
  watch:{
    filter: {
      handler: function(newVal, oldVal){
        if(this.filter.p > 1 && this.filter.p == this.ofilter_page){
          this.filter.p = this.ofilter_page = 1;
          return false;
        }
        this.ofilter_page = this.filter.p;
        this.fetch();
      },
      deep: true
    },
  },
  methods: {
    fetch() {
      this.$http.get('/api/orders/?p='+this.filter.p+'&q='+this.filter.q+"&o="+this.filter.o).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});

    },
  }
}
</script>
