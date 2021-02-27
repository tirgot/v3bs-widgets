<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Prescriptions</h1>
    <div class="row">

      <div class="col">
        <div class="app-card">
          <div class="app-card-header p-3">
            <router-link :to="{'name':'prescriptions'}">&lt;&lt;&lt; Show Prescription List </router-link>
            <h4 class="d-flex">Prescription Detail<span class="ms-auto"><PrescriptionStatus :status="obj.status" /></span></h4>
          </div>
          <div class="app-card-body p-3">
            <PrescriptionSummary :obj="obj"></PrescriptionSummary>
          </div>
          <div class="app-card-footer p-3">
            <div class="row g-3">
              <div class="col-6"><button class="btn btn-success btn-block">Generate Prescription</button></div>
              <div class="col-6"><button class="btn btn-warning btn-block">Assign A DME</button></div>
              <div class="col-6"><button class="btn btn-secondary btn-block">Check Availability</button></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="app-card p-3">
          <PrescriptionLog :obj="obj" @updatePrescriptionDetail="fetch();"></PrescriptionLog>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import PrescriptionSummary from "./PrescriptionSummary.vue";
import PrescriptionLog from "./PrescriptionLog.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";
import PrescriptionStatus from "./PrescriptionStatus.vue";
export default {
  name: 'PrescriptionDetail',
  components: {PrescriptionStatus, LoadButton, PrescriptionLog, PrescriptionSummary},
  data(){return{
    obj: {},
    id: this.$route.params.id
  }},
  created() {
    this.$watch('id', (newVal, oldVal) => {
      this.fetch();
    })
  },
  mounted() {
    this.fetch();
  },
  emits: ['updatePrescriptionList'],
  methods: {
    fetch() {
      this.$http.get('/api/prescriptions/'+this.id).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});
    },
  }
}
</script>
