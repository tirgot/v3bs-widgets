<template>
  <div class="app-card">
    <div class="app-card-header p-3">
      <h5 class="d-flex">Most Popular Products
        <span class="ms-auto"><LoadButton @click="fetch" class="btn btn-success text-light">Refresh</LoadButton></span>
        <span class="ms-auto">
          <select v-model="filter_range" class="form-select">
            <option value="7">Last One Week</option>
            <option value="30">Last 30 days</option>
            <option value="91">Last 3 Months days</option>
            <option value="183">Last Half year</option>
            <option value="365">Last One Year</option>
          </select>
        </span>
      </h5>
    </div>
    <div class="app-card-body p-3">
      <table class="table">
        <tbody>
          <tr v-for="row in obj.results">
            <td><a :href="'/shop/catalogue/p_'+row.pid"  target="_blank">{{ row.t }}</a></td>
            <td>{{ row.c }}</td>
            <td>{{ currency_use(row.r) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="app-card-footer">
    </div>
  </div>
</template>


<script>
import LoadButton from "../../widgets/button/LoadButton.vue";

export default {
  name: 'StatPopProduct',
  components: {LoadButton},
  props: [],
  data(){
    return {
      filter_range: 30,
      obj: {},
    }
  },
  watch: {
    filter_range(){
      this.fetch();
    }
  },
  methods: {
    fetch() {
      this.$http.get('/api/statistics/' + this.filter_range + '/popprod_stat/').then(resp => {
        this.obj = resp.data
      }).catch(errs => {});
    },
    currency_use: function (value){
      value = value.toString();
      value = value.split(/(?=(?:...)*$)/);
      // Convert the array to a string and format the output
      value = value.join(',');
      return '$' + value;
    }
  },
  created() {
    this.fetch();
  }
}
</script>