<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Dashboard</h1>

    <div class="row row-cols-2 g-3">
      <div class="col"><StatOrder /></div>
      <div class="col"><StatState /></div>
      <div class="col"><StatPopProduct /></div>
    </div>
  </div>
</template>

<script>
import StatOrder from "./StatOrder.vue";
import StatState from "./StatState.vue";
import StatPopProduct from "./StatPopProduct.vue";

export default {
  name: 'Statistics',
  components: {StatPopProduct, StatState, StatOrder},
  data(){
    return {
      temd: '2020-12-31'
    }
  }
}
</script>
