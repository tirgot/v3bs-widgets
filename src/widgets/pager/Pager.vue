<template>
  <div v-if="total > 0" class="d-flex align-items-center">
    <span>Total: {{ total }} - {{ page }}/{{ page_count }}</span>
    <span v-if="page_count > 1" class="ms-5">
      <ul class="pagination mb-0">
        <li v-if="page_show_first" class="page-item" :key="1"><button class="page-link" @click="$emit('update:page', 1)">{{ first_text }}</button></li>
        <li v-for="p in (page_end - page_start +1)" :class="(p + page_start -1) == page ? 'page-item active' : 'page-item'" :key="(p + page_start -1)"><button class="page-link" @click="$emit('update:page', (p + page_start -1))">{{ (p + page_start -1) }}</button></li>
        <li v-if="page_show_last" class="page-item" :key="page_count"><button class="page-link" @click="$emit('update:page', page_count)">{{ last_text }}</button></li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Pager',
  components: {},
  props: ['total', 'size', 'page'],
  emits: ['update:page'],
  data(){
    return{
      cfg_page_size: 20,
    }
  },
  mounted() {
  },
  computed: {
    page_count(){return Math.ceil(this.total/this.size)},
    page_start(){return Math.max(1, (this.page - 3))},
    page_end(){return Math.min(this.page_count, (this.page + 3))},
    page_show_first(){return Boolean(this.page_start > 1)},
    page_show_last(){return Boolean(this.page_end < this.page_count)},
    first_text(){return this.page_start == 2 ? '1' : 'First'},
    last_text(){return this.page_end == this.page_count - 1 ? this.page_count : 'Last'}
  }

}
</script>

