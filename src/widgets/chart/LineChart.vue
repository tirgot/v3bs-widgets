<script>
import { defineComponent } from 'vue'
import { Line, Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'OrderLineChart',
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  },
  //watch: {
  //  chartData(newVal, oldVal){
  //    console.log('B', newVal)
  //  }
  //}
})

</script>