<template>
  <div className="container-fluid">
    <h1 class="app-page-title">Contact Messages</h1>

    <div class="row">
      <div class="col">
        <div class="app-card p-3">
          <div class="d-flex align-items-end my-3">
            <span class="pe-3">
              <LoadButton class="btn btn-primary px-3" @click="fetch"><i class="fas fa-sync fa-fw"></i></LoadButton>
            </span>
            <span class="ms-auto">
              <select v-model.lazy="filter.status" class="form-control" style="width: 200px;">
                <option v-for="opt in status_options" :value="opt[0]">{{ opt[1] }}</option>
              </select>
            </span>
          </div>

          <MessageList :obj="obj" />

          <div class="d-flex align-items-center">
            <div class="ms-auto"><Pager v-model:page="filter.p" :size="15" :total="obj.count" /></div>
          </div>
        </div>
      </div>
      <div class="col" v-if="$route.params.id">
        <div class="app-card">
          <MessageDetail :id="$route.params.id" @updateMessageList="fetch()"></MessageDetail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MessageDetail from "./MessageDetail.vue";

import Pager from "../../widgets/pager/Pager.vue";
import LoadButton from "../../widgets/button/LoadButton.vue";
import MessageList from "./MessageList.vue";

export default {
  name: 'Message',
  components: {MessageList, LoadButton, Pager, MessageDetail},
  data(){
    return{
      filter: {
        p: 1,
        status: '',
      },
      ofilter_status: '',
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
      this.$http.get('/api/contact-messages/?p='+this.filter.p+'&status='+this.filter.status).then(resp => {
        this.obj = resp.data;
      }).catch(errs => {});

    },
  }
}
</script>
