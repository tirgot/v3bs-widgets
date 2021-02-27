<template>
  <thead>
    <tr>
      <th v-for="col in cols">
        <span v-if="Boolean(col.ordering)">
          <button class="btn btn-link" @click="$emit('onOrdering', [(col.ordering == ofield ? (odire == '+' ? '-' : '+') : '+'), col.ordering])">
            {{ col.text }}
            <i v-if="col.ordering == ofield && odire == '+'" class="fas fa-sort-amount-down-alt fa-fw"></i>
            <i v-else-if="col.ordering == ofield" class="fas fa-sort-amount-up-alt fa-fw"></i>
          </button>
        </span>
        <span v-else>{{ col['text'] }}</span>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'Thead',
  props: ['cols', 'ordering'],
  emits: ['onOrdering'],
  data(){return {
    ofield: 'date_joined',
    odire: '+'
  }},
  watch: {
    ordering(newVal, oldVal) {
      if(newVal.startsWith('-')){
        this.ofield = newVal.slice(1);
        this.odire = '-';
      }else{
        this.ofield = newVal.slice(newVal.indexOf('+')+1);
        this.odire = '+';
      }
    }
  }
}
</script>
