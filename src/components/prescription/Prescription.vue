<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Prescriptions</h1>

    <div class="row">
      <div class="col">
        <div class="app-card p-3">
          <div class="d-flex align-items-end my-3">
            <span class="pe-3">
              <LoadButton class="btn btn-primary px-3 text-light" @click="fetch"><i class="fas fa-sync fa-fw"></i></LoadButton>
            </span>
            <span class="ms-auto">
              <select v-model.lazy="filter.status" class="form-control" style="width: 200px;">
                <option v-for="opt in status_options" :value="opt[0]">{{ opt[1] }}</option>
              </select>
            </span>
          </div>

          <PrescriptionList :obj="obj" />

          <div class="d-flex align-items-center">
            <div class="ms-auto"><Pager v-model:page="filter.p" :size="15" :total="obj.count" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PrescriptionDetail from "./PrescriptionDetail.vue";

import Pager from "../../widgets/pager/Pager.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";
import PrescriptionList from "./PrescriptionList.vue";

export default {
  name: 'Prescription',
  components: {PrescriptionList, LoadButton, Pager, PrescriptionDetail},
  data(){
    return{
      filter: {
        p: 1,
        status: '',
      },
      ofilter_status: '',
      obj: {},
      status_options: [['', '--- ALL ---'], [1, 'Open'], [11, 'Processing'], [13, 'Looking for DME'], [15, 'Issues'],
                       [23, 'Assigned a DME'], [25, 'Solved / Replied'], [41, 'Case Terminated']]
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
      this.$http.get('/api/prescriptions/?p='+this.filter.p+'&status='+this.filter.status).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});

    },
  }
}
</script>
