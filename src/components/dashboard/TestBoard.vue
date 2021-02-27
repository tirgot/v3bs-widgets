<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Testboard</h1>

    <div class="row row-cols-2 g-3">
      <div class="col"><DateRangePicker v-model="temd" /></div>
      <div class="col">{{ temd }}</div>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "../../widgets/form/DateRangePicker.vue";

export default {
  name: 'TestBoard',
  components: {DateRangePicker},
  data(){
    return {
      temd: '2020-12-31'
    }
  }
}
</script>
