<template>
  <div class="app-card">
    <div class="app-card-header p-3">
      <h5 class="d-flex">Orders
        <span class="ms-auto"><LoadButton @click="fetch" class="btn btn-success text-light">Refresh</LoadButton></span>
        <span class="ms-auto">
          <select v-model="filter_range" class="form-select">
            <option value="month">Month</option>
            <option value="quarter">Quarter</option>
            <option value="year">Year</option>
          </select>
        </span>
      </h5>
    </div>
    <div class="app-card-body p-3">
      <LineChart v-if="data_loaded" :chart-data="chartData" :chart-options="chartOptions" style="max-height: 300px" />
    </div>
    <div class="app-card-footer">

    </div>
  </div>
</template>


<script>
import LineChart from "../../widgets/chart/LineChart.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";

export default {
  name: 'StatOrder',
  components: {LoadButton, LineChart},
  props: [],
  data(){return {
    filter_range: 'month',
    data_loaded: false,
    chartData: {},
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false, text: 'Order'
      },
      tooltips: {
        mode: 'index',
        intersect: true
      },
      scales: {
        yAxes: [
          {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true, position: 'left', id: 'y-axis-1', gridLines: {color: '#ff0000'},
            ticks: {
              userCallback: function (value, index, values){
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                // Convert the array to a string and format the output
                value = value.join(',');
                return '$' + value;
              }
            },
            color: '#ff0000'
          },
          {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true, position: 'right', id: 'y-axis-2', gridLines: {drawOnChartArea: false},
          }
        ],
      },
    }
  }},
  watch: {
    filter_range(){
      this.fetch();
    }
  },
  methods: {
    fetch() {
      this.data_loaded = false
      this.$http.get('/api/statistics/' + this.filter_range + '/order_stat/').then(resp => {
        this.chartData = resp.data
        this.data_loaded = true
      }).catch(errs => {});
    },
  },
  created() {
    this.fetch();
  }
}
</script>
