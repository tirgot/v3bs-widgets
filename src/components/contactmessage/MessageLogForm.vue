<template>
  <div class="row g-3">
    <div class="col-8">
      <div class="form-floating">
        <textarea v-model.lazy="data_log['content']" style="height: 120px;" class="form-control" placeholder="Log Content"></textarea>
        <label>Log Content</label>
      </div>
    </div>
    <div class="col-4">
      <div class="form-floating">
        <select v-model.lazy="data_log['new_status']" class="form-control" placeholder="Status">
          <option v-for="opt in status_options" :value="opt[0]">{{ opt[1] }}</option>
        </select>
        <label>Status</label>
      </div>
      <LoadButton class="btn btn-primary px-3 mt-3" @click="saveLog"><i class="far fa-save fa-fw"></i> Save Log</LoadButton>
    </div>
  </div>
</template>

<script>
import MessageSummary from "./MessageSummary.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";
export default {
  name: 'MessageLogForm',
  components: {LoadButton, MessageSummary},
  props: ['obj'],
  data(){return{
    data_log: {'content':'', 'old_status': '', 'new_status':''},
  }},
  created() {
    this.$watch(() => this.obj.id, (newVal, oldVal) => {
      this.data_log['content'] = '';
      this.data_log['new_status'] = this.obj.status;
      this.data_log['old_status'] = this.obj.status;
    })
  },
  mounted() {
    this.data_log['content'] = '';
    this.data_log['new_status'] = this.obj.status;
    this.data_log['old_status'] = this.obj.status;
  },
  computed: {
    status_options(){
      if(this.obj.status == 1){
        return [[11, 'Need follow up'], [13, 'Issues'], [21, 'Solved / Replied'], [41, 'No need to reply'], [42, 'Spam']]
      } else if (this.obj.status == 11){
        return [[11, 'Need follow up(**No Change**)'], [13, 'Issues'], [21, 'Solved / Replied'], [41, 'No need to reply'], [42, 'Spam']]
      } else if (this.obj.status == 13){
        return [[11, 'Need follow up'], [13, 'Issues(**No Change**)'], [21, 'Solved / Replied'], [41, 'No need to reply'], [42, 'Spam']]
      } else return []
    },
  },
  emits: ['updateMessageDetail'],
  methods:{
    saveLog(){
      // check status
      if(!this.data_log.new_status){alert("Please select status"); return false;}
      else if(!([11, 13, 21, 41, 42].includes(this.data_log.new_status))){alert("Please select Status"); return false;}
      // check validation
      if(this.data_log.new_status == this.data_log.old_status && !this.data_log.content){alert("Please do not submit blank information!"); return false;}

      const formData = new FormData();
      formData.append('content', this.data_log.content)
      formData.append('old_status', this.data_log.old_status)
      formData.append('new_status', this.data_log.new_status)

      this.$http.post('/api/contact-messages/'+this.obj.id+'/add_log/', formData).then(resp => {
        this.data_log.content = ''
        this.data_log.old_status = this.data_log.new_status
        this.$emit('updateMessageDetail', resp.data['is_obj_updated'])
      }).catch(err => {});
    },
  }
}
</script>
